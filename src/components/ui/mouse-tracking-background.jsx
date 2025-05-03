// src/components/ui/mouse-tracking-background.jsx
"use client";

import { useEffect, useState } from "react";

export function MouseTrackingBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const offsetX = mousePosition.x - windowSize.width / 2;
  const offsetY = mousePosition.y - windowSize.height / 2;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Glassmorphismus Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-pink-50/60 dark:from-blue-900/70 dark:via-purple-900/50 dark:to-pink-900/40 mix-blend-overlay" />

      {/* Animated Mesh Gradient */}
      <div className="absolute -inset-10 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      {/* Interactive Mouse Following Gradients */}
      <div
        className="absolute w-full h-full"
        style={{
          background: `
            radial-gradient(600px circle at ${mousePosition.x}px ${
            mousePosition.y
          }px, 
              rgba(99, 102, 241, 0.3), 
              transparent 60%
            ),
            radial-gradient(400px circle at ${
              mousePosition.x + offsetX / 8
            }px ${mousePosition.y + offsetY / 8}px, 
              rgba(59, 130, 246, 0.3), 
              transparent 50%
            ),
            radial-gradient(300px circle at ${
              mousePosition.x + offsetX / 4
            }px ${mousePosition.y + offsetY / 4}px, 
              rgba(139, 92, 246, 0.3), 
              transparent 40%
            )
          `,
        }}
      />

      {/* Glow Effects */}
      <div
        className="absolute w-full h-full transition-all duration-200"
        style={{
          background: `
            radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(168, 85, 247, 0.15), 
              transparent 50%
            )
          `,
        }}
      />

      {/* Animated Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(0, 0, 0) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(0, 0, 0) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          transform: `translate(${offsetX / 40}px, ${offsetY / 40}px)`,
        }}
      />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-5"
        style={{
          backgroundImage:
            "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzAwMCIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=)",
          backgroundRepeat: "repeat",
          backgroundSize: "4px 4px",
        }}
      />
    </div>
  );
}
