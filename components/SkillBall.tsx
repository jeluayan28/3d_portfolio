"use client";

import dynamic from "next/dynamic";

// three.js needs the browser, so the canvas is client-only.
export const SkillBall = dynamic(() => import("./BallCanvas"), { ssr: false });
