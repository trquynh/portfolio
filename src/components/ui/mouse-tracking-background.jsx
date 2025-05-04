"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function SpotlightEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    // More comprehensive check for mobile devices
    const checkIfMobile = () => {
      // Check for touch capability
      const hasTouchCapability =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0;

      // Check for mobile user agent (additional check)
      const mobileUserAgent =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      // Consider it mobile if either condition is true
      return hasTouchCapability || mobileUserAgent;
    };

    // Set the mobile state
    setIsMobile(checkIfMobile());

    // Only set up mouse tracking for non-mobile devices
    if (!checkIfMobile()) {
      const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  // If it's a mobile device, don't render anything
  if (isMobile) {
    return null;
  }

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
