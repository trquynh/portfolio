// src/components/theme-provider.jsx
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeProvider({ children, ...props }) {
  // Client-side rendering sicherstellen
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render null on initial mount to avoid hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark" // Diese Einstellung setzt Dark als Standard
      enableSystem={false} // System-Präferenzen ignorieren (optional)
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
