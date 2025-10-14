import { useEffect, useState, useRef } from 'react';

export default function useActiveSection(sectionIds: string[], rootMargin = '-40% 0px -40% 0px') {
  const [activeId, setActiveId] = useState<string | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // create thresholds for more granular intersection ratios
    const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);

    const observed: Map<string, number> = new Map();

    const updateActive = () => {
      // choose the id with the largest intersection ratio
      let winner: string | null = null;
      let best = 0;
      for (const [id, ratio] of observed.entries()) {
        if (ratio > best) {
          best = ratio;
          winner = id;
        }
      }
      if (winner !== activeId) setActiveId(winner);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          observed.set(entry.target.id, entry.intersectionRatio);
        });
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(updateActive);
      },
      { root: null, rootMargin, threshold: thresholds }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [sectionIds, rootMargin, activeId]);

  return activeId;
}
