"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { BufferGeometry, CanvasTexture, Float32BufferAttribute, MathUtils, RepeatWrapping, SRGBColorSpace } from "three";
import type { Group } from "three";

// Palette on the black page: hot pink, magenta, yellow and an off-white key. Constant names are just colour slots.
const PINK = "#FF4191"; // hot pink
const FOREST = "#FFF078"; // yellow
const BLUSH = "#E90074"; // magenta
const WHITE = "#FFF4F8"; // off-white

type Vec3 = [number, number, number];

type KeyDef = {
  id: string;
  label: string;
  /** letter keys: offset inside the word block. decor keys: unused */
  p: Vec3;
  /** decor keys: resting spot as a fraction of the screen (-1..1) */
  n?: [number, number];
  /** resting tilt (x, y, z radians) */
  r: Vec3;
  color: string;
  /** width in key units */
  w?: number;
  /** uniform scale */
  s?: number;
  /** seconds of flying before the key starts to settle */
  delay: number;
  /** seconds the settle takes */
  duration: number;
  /** how far the key roams once settled */
  roam: number;
  phase: number;
  /** position in the "LET'S BEGIN" sequence, or -1 */
  seq: number;
};

/* ---- Letter keys that spell "LET'S BEGIN" ------------------------------ */

const WORDS = ["LET'S", "BEGIN"];
const PITCH = 1.85;
const ROW_Y = [1.25, -1.15];
const WORD_SPAN = 9.8; // approx. width of a word block at scale 1
const LETTER_COLORS = [BLUSH, PINK, WHITE, WHITE, FOREST, WHITE, WHITE, BLUSH, PINK, WHITE];

const LETTER_KEYS: KeyDef[] = WORDS.flatMap((word, row) =>
  [...word].map((ch, i): KeyDef => {
    const seq = row * 5 + i;
    return {
      id: `letter-${seq}`,
      label: ch,
      p: [(i - (word.length - 1) / 2) * PITCH, ROW_Y[row], 0],
      r: [1.4, 0, 0], // ~80deg: the cap top faces the viewer, legend upright
      color: LETTER_COLORS[seq],
      s: 1.5,
      delay: 3 + seq * 0.15,
      duration: 2.2,
      roam: 0.04,
      phase: seq * 1.3,
      seq,
    };
  }),
);

/* ---- Decorative keys that keep drifting around the screen ------------- */

const DECOR: { label: string; n: [number, number]; w?: number; r: Vec3; color: string }[] = [
  { label: "Esc", n: [-0.86, 0.82], r: [0.9, 0.4, -0.25], color: WHITE },
  { label: "</>", n: [-0.4, 0.88], r: [0.8, -0.5, 0.2], color: PINK },
  { label: "Ctrl", n: [0.12, 0.84], w: 1.5, r: [1.0, -0.3, 0.3], color: FOREST },
  { label: "Alt", n: [0.62, 0.62], r: [0.7, -0.7, -0.2], color: BLUSH },
  { label: "Tab", n: [0.95, 0.8], w: 1.5, r: [1.1, 0.5, 0.4], color: WHITE },
  { label: "Fn", n: [0.94, 0.02], r: [1.0, -0.6, 0.35], color: PINK },
  { label: "Del", n: [-0.9, -0.84], r: [0.8, -0.4, -0.3], color: WHITE },
  { label: "{ }", n: [-0.45, -0.88], r: [0.9, 0.2, -0.4], color: PINK },
  { label: "Shift", n: [0.05, -0.86], w: 2, r: [1.0, 0.45, 0.2], color: FOREST },
  { label: "?", n: [0.55, -0.7], r: [0.8, -0.3, 0.4], color: BLUSH },
  { label: "#", n: [0.94, -0.82], r: [0.9, 0.1, 0.3], color: WHITE },
  { label: "Wi-Fi", n: [-0.06, 0.52], w: 1.5, r: [0.9, -0.2, -0.1], color: BLUSH },
  { label: "Home", n: [-0.97, 0.3], w: 1.5, r: [1.0, 0.3, 0.2], color: BLUSH },
  { label: "Help", n: [0.34, -0.5], w: 1.5, r: [0.9, -0.5, 0.15], color: WHITE },
];

const DECOR_KEYS: KeyDef[] = DECOR.map((k, i) => ({
  ...k,
  id: `decor-${i}`,
  p: [0, 0, (i % 3) - 1.5],
  delay: 0.9 + i * 0.13,
  duration: 2,
  roam: 0.55,
  phase: i * 2.1 + 0.4,
  seq: -1,
}));

const KEYS: KeyDef[] = [...DECOR_KEYS, ...LETTER_KEYS];

/* ---- Sculpted keycap geometry ------------------------------------------ */

const KEY_DEPTH = 0.92;
const RING_SEGMENTS = 56;

// Cross-section scale and height from the bottom edge, up the tapered wall, over the bevel...
const WALL: [number, number][] = [
  [1, 0],
  [0.995, 0.1],
  [0.95, 0.4],
  [0.9, 0.5],
];
// ...then into a gently dished top. Exact height of the rim:
const TOP_RIM = 0.52;
const TOP_RADIUS = 0.85;
const DISH = 0.11;
const DISH_RINGS = 9;

/** Bottom-up rings of [scale, height]. The last ring collapses to the centre of the dish. */
const PROFILE: [number, number][] = [
  ...WALL,
  ...Array.from({ length: DISH_RINGS + 1 }, (_, k): [number, number] => {
    const s = TOP_RADIUS * (1 - k / DISH_RINGS);
    return [s, TOP_RIM - DISH * (1 - (s / TOP_RADIUS) ** 2)];
  }),
];
const WALL_RINGS = WALL.length; // rings 0..WALL_RINGS-1 belong to the sides

const superellipse = (v: number) => Math.sign(v) * Math.abs(v) ** 0.4;

function buildKeycap(width: number): BufferGeometry {
  const a = width / 2;
  const d = KEY_DEPTH / 2;
  const positions: number[] = [];
  const uvs: number[] = [];

  for (const [s, y] of PROFILE) {
    for (let j = 0; j < RING_SEGMENTS; j++) {
      const th = (j / RING_SEGMENTS) * Math.PI * 2;
      const x = a * s * superellipse(Math.cos(th));
      const z = d * s * superellipse(Math.sin(th));
      positions.push(x, y, z);
      uvs.push(0.5 + x / (2 * a * TOP_RADIUS), 0.5 - z / (2 * d * TOP_RADIUS));
    }
  }
  // Centre of the underside.
  const bottomCentre = positions.length / 3;
  positions.push(0, 0, 0);
  uvs.push(0.5, 0.5);

  const wall: number[] = [];
  const top: number[] = [];
  for (let i = 0; i < PROFILE.length - 1; i++) {
    const target = i < WALL_RINGS - 1 ? wall : top;
    for (let j = 0; j < RING_SEGMENTS; j++) {
      const j2 = (j + 1) % RING_SEGMENTS;
      const A = i * RING_SEGMENTS + j;
      const B = i * RING_SEGMENTS + j2;
      const C = (i + 1) * RING_SEGMENTS + j;
      const D = (i + 1) * RING_SEGMENTS + j2;
      target.push(A, C, B, B, C, D);
    }
  }
  for (let j = 0; j < RING_SEGMENTS; j++) {
    wall.push(bottomCentre, j, (j + 1) % RING_SEGMENTS);
  }

  const geo = new BufferGeometry();
  geo.setAttribute("position", new Float32BufferAttribute(positions, 3));
  geo.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
  geo.setIndex([...wall, ...top]);
  geo.addGroup(0, wall.length, 0);
  geo.addGroup(wall.length, top.length, 1);
  geo.computeVertexNormals();
  return geo;
}

/* ---- Legends ------------------------------------------------------------ */

const DARK_TEXT = "#111111";
const LIGHT_TEXT = "#FFFFFF";

function legendTexture(label: string, bg: string, fg: string, width: number) {
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(278 * width);
  canvas.height = 256;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = fg;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const size = label.length > 3 ? 70 : label.length > 1 ? 92 : 150;
  ctx.font = `700 ${size}px ui-sans-serif, system-ui, "Segoe UI", sans-serif`;
  ctx.fillText(label, canvas.width / 2, canvas.height / 2 + 4);
  const tex = new CanvasTexture(canvas);
  tex.colorSpace = SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

/** Fine speckle used as a bump map so the caps read as matte textured PBT, not shiny plastic. */
let grainTexture: CanvasTexture | null = null;
function getGrain() {
  if (grainTexture) return grainTexture;
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const img = ctx.createImageData(size, size);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = 120 + Math.random() * 135;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
    img.data[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  grainTexture = new CanvasTexture(canvas);
  grainTexture.wrapS = grainTexture.wrapT = RepeatWrapping;
  grainTexture.repeat.set(5, 5);
  return grainTexture;
}

/** Cherry-style switch under the cap: flange, housing and a cross-shaped stem. */
function Switch({ width, stem }: { width: number; stem: string }) {
  const w = Math.min(width, 1) * 0.8;
  return (
    <group>
      <mesh position={[0, -0.4, 0]}>
        <boxGeometry args={[0.92, 0.1, 0.92]} />
        <meshStandardMaterial color="#0C0C0C" roughness={0.9} />
      </mesh>
      <mesh position={[0, -0.24, 0]}>
        <boxGeometry args={[w, 0.24, w]} />
        <meshStandardMaterial color="#232323" roughness={0.75} />
      </mesh>
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[0.34, 0.12, 0.09]} />
        <meshStandardMaterial color={stem} roughness={0.6} />
      </mesh>
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[0.09, 0.12, 0.34]} />
        <meshStandardMaterial color={stem} roughness={0.6} />
      </mesh>
    </group>
  );
}

/* ---- Animated key ------------------------------------------------------- */

const STEMS = ["#FF4191", "#E90074", "#FFF078"];

const easeInOut = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - (-2 * x + 2) ** 3 / 2);

function FloatingKey({ def, reduceMotion }: { def: KeyDef; reduceMotion: boolean }) {
  const ref = useRef<Group>(null);
  const viewport = useThree((s) => s.viewport);

  const width = def.w ?? 1;
  const dark = def.color === BLUSH;
  const geometry = useMemo(() => buildKeycap(width - 0.08), [width]);
  const grain = useMemo(() => getGrain(), []);
  const legend = useMemo(
    () => legendTexture(def.label, def.color, dark ? LIGHT_TEXT : DARK_TEXT, width),
    [def.label, def.color, dark, width],
  );

  useFrame(({ clock }) => {
    const g = ref.current;
    if (!g) return;
    const t = clock.elapsedTime;
    const vw = viewport.width;
    const vh = viewport.height;
    const wide = vw / vh >= 1.1;

    // Where this key rests, depending on the screen shape.
    let tx: number, ty: number, tz: number, scale: number;
    if (def.seq >= 0) {
      const k = Math.min(1, (wide ? vw * 0.42 : vw * 0.92) / WORD_SPAN);
      tx = (wide ? vw * 0.24 : 0) + def.p[0] * k;
      ty = (wide ? 0 : -vh * 0.2) + def.p[1] * k;
      tz = 0;
      scale = (def.s ?? 1) * k;
    } else {
      const [nx, ny] = def.n!;
      tx = nx * (vw / 2);
      ty = (wide ? ny : Math.sign(ny) * 0.88) * (vh / 2);
      tz = def.p[2];
      scale = wide ? 1 : 0.75;
    }

    // 0 = still flying, 1 = settled.
    const e = reduceMotion ? 1 : easeInOut(MathUtils.clamp((t - def.delay) / def.duration, 0, 1));
    const fly = 1 - e;

    // While flying, each key sweeps a wide Lissajous loop across the whole screen.
    const f = 0.5 + (def.phase % 1.7) * 0.16;
    const a = t * f + def.phase;
    const ox = Math.cos(a) * vw * 0.52;
    const oy = Math.sin(a * 1.37 + def.phase) * vh * 0.46;
    const oz = Math.sin(a * 0.8) * 5 - 1;

    // Once settled, decor keys keep wandering slowly; letter keys only breathe.
    const rt = t * 0.55 + def.phase;
    const roam = reduceMotion ? 0 : def.roam * e;
    const rx = Math.cos(rt * 0.7) * roam * 0.7;
    const ry = Math.sin(rt) * roam;
    const rz = Math.sin(rt * 0.5) * roam * 0.5;
    const wobble = (def.seq >= 0 ? 0.2 : 1) * e * (reduceMotion ? 0 : 1);

    // Typing wave: letters press down one after another.
    let press = 0;
    if (def.seq >= 0 && !reduceMotion && t > 8) {
      const c = ((t - 8) % 6) - def.seq * 0.16;
      press = Math.exp(-(c * c) / 0.015);
    }

    g.position.set(
      MathUtils.lerp(ox, tx + rx, e),
      MathUtils.lerp(oy, ty + ry, e),
      MathUtils.lerp(oz, tz + rz - press * 0.45, e),
    );
    g.rotation.set(
      def.r[0] + fly * (t * 1.4 + def.phase) + Math.sin(rt * 0.8) * 0.14 * wobble - press * 0.08,
      def.r[1] + fly * (t * 2.0 + def.phase) + Math.cos(rt * 0.6) * 0.2 * wobble,
      def.r[2] + fly * (t * 1.0) + Math.sin(rt * 0.5) * 0.09 * wobble,
    );
    g.scale.setScalar(scale);
  });

  return (
    <group ref={ref}>
      <mesh geometry={geometry}>
        <meshStandardMaterial attach="material-0" color={def.color} roughness={0.92} metalness={0} bumpMap={grain} bumpScale={0.6} envMapIntensity={0.45} />
        <meshStandardMaterial attach="material-1" map={legend} roughness={0.9} metalness={0} bumpMap={grain} bumpScale={0.6} envMapIntensity={0.45} />
      </mesh>
      <Switch width={width} stem={STEMS[Math.floor(def.phase * 10) % STEMS.length]} />
    </group>
  );
}

function Cloud({ reduceMotion }: { reduceMotion: boolean }) {
  const group = useRef<Group>(null);

  // Slight parallax toward the pointer.
  useFrame(({ pointer }) => {
    if (!group.current) return;
    const k = reduceMotion ? 0 : 1;
    group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, pointer.x * 0.1 * k, 0.04);
    group.current.rotation.x = MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.07 * k, 0.04);
  });

  return (
    <group ref={group}>
      {KEYS.map((def) => (
        <FloatingKey key={def.id} def={def} reduceMotion={reduceMotion} />
      ))}
    </group>
  );
}

/** Fills its parent. Pointer is read from the page so text above the canvas doesn't block parallax. */
export default function KeyboardScene({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 20], fov: 38 }}
      eventSource={document.body}
      eventPrefix="client"
    >
      <hemisphereLight args={["#FFF4F8", "#E90074", 0.8]} />
      <directionalLight position={[-6, 10, 10]} intensity={1.6} color="#FFFFFF" />
      <directionalLight position={[8, -4, 6]} intensity={0.5} color="#FF4191" />
      {/* Procedural studio lighting for glossy reflections (no network fetch). */}
      <Environment resolution={256} frames={1}>
        <Lightformer form="rect" intensity={5} position={[0, 6, 8]} scale={[16, 6, 1]} color="#FFFFFF" />
        <Lightformer form="rect" intensity={3} position={[-9, 0, 4]} rotation-y={Math.PI / 2} scale={[10, 8, 1]} color="#FF4191" />
        <Lightformer form="rect" intensity={2} position={[9, -2, 5]} rotation-y={-Math.PI / 2} scale={[10, 8, 1]} color="#FFFFFF" />
      </Environment>
      <Cloud reduceMotion={reduceMotion} />
    </Canvas>
  );
}
