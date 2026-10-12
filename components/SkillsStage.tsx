"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { View } from "@react-three/drei";

/**
 * <View> positions each ball using the canvas position R3F measured earlier, which goes stale while
 * the page scrolls. Re-reading it every frame (before the views render) keeps the balls glued to
 * their cards. It also fixes the width View uses for its off-screen check (see below).
 */
function SyncCanvasRect() {
  useFrame(({ gl, size }) => {
    const r = gl.domElement.getBoundingClientRect();
    size.top = r.top;
    size.left = r.left;
    // View hides a ball whose viewport-x exceeds the canvas width, so on wide screens the
    // right-hand cards lost their balls. Report a width that always covers the viewport.
    size.width = Math.max(r.width, window.innerWidth);
  }, -1);
  return null;
}

/** Wraps the skill grid and owns the single WebGL canvas that every <SkillBall> draws into. */
export function SkillsStage({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  // Create the WebGL context only once the grid is near the viewport, so the page doesn't hold two
  // contexts (hero + skills) from first paint, and so dev reloads burn fewer of Chrome's context budget.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative">
      {children}
      {mounted && (
        <Canvas
          dpr={[1, 2]}
          gl={{ powerPreference: "high-performance" }}
          eventSource={ref as React.RefObject<HTMLElement>}
          style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
        >
          <SyncCanvasRect />
          <View.Port />
        </Canvas>
      )}
    </div>
  );
}
