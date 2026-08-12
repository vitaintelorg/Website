"use client";

import { useEffect, useState } from "react";

/**
 * Returns the id of whichever tracked section the user has scrolled into,
 * based on a probe point ~35% down the viewport. Simple offsetTop-based
 * comparison rather than IntersectionObserver rootMargin percentages, which
 * behave inconsistently across browsers. Returns null if none of the ids
 * exist on the current page (safe to call on any page).
 */
export function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    function updateActive() {
      const probeY = window.scrollY + window.innerHeight * 0.35;
      let current = elements[0].id;
      for (const el of elements) {
        if (el.getBoundingClientRect().top + window.scrollY <= probeY) {
          current = el.id;
        }
      }
      setActiveId(current);
    }

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [ids]);

  return activeId;
}