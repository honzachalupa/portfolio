"use client";

import { GradientBackground } from "react-gradient-animation";

export function Background(): React.ReactNode {
  return (
    <GradientBackground
      count={3}
      size={{ min: 500, max: 700, pulse: 0.3 }}
      speed={{ x: { min: 0.1, max: 0.1 }, y: { min: 0.1, max: 0.1 } }}
      colors={{
        background: "#1e1e1e",
        particles: ["#111", "#222", "#333"],
      }}
      blending="overlay"
      shapes={["c"]}
      // style={{ opacity: 0.2 }}
    />
  );
}
