"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { sound } from "@/lib/sound";

// Plays the page-turn chime on real route changes (not on first load).
const NavSound = () => {
  const pathname = usePathname();
  const previous = useRef<string | null>(null);

  useEffect(() => {
    if (previous.current !== null && previous.current !== pathname) {
      sound.nav();
    }
    previous.current = pathname;
  }, [pathname]);

  return null;
};

export default NavSound;
