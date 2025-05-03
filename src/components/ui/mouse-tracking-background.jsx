"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function SpotlightEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const isLight = theme === "light";

  return (
    <>
      {/* Main Spotlight Effect */}
      <div
        className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-300"
        style={{
          background: isLight
            ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px,
                rgba(59, 130, 246, 0.15),
                transparent 50%)`
            : `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px,
                rgba(99, 102, 241, 0.1),
                transparent 50%)`,
        }}
      />

      {/* Core Glow Effect */}
      <div
        className="fixed inset-0 pointer-events-none z-40"
        style={{
          background: isLight
            ? `radial-gradient(120px circle at ${mousePosition.x}px ${mousePosition.y}px,
                rgba(83, 85, 201, 0.13),
                transparent 65%)`
            : `radial-gradient(120px circle at ${mousePosition.x}px ${mousePosition.y}px,
                rgba(255, 255, 255, 0.6),
                transparent 65%)`,
          filter: "blur(2px)",
        }}
      />

      {/* Subtle accent in dark mode */}
      {!isLight && (
        <div
          className="fixed inset-0 pointer-events-none z-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(59, 130, 246, 0.05),
              transparent 60%)`,
          }}
        />
      )}
    </>
  );
}
