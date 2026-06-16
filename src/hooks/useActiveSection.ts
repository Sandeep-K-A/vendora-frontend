import { useEffect, useState } from "react";

export function useActiveSection(
  sectionIds: string[],
  rootMargin = "-80px 0px -80% 0px",
): string {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const intersectingMap = new Map<string, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          intersectingMap.set(entry.target.id, entry.isIntersecting);
        });

        // First section in DOM order that is intersecting wins
        const firstIntersecting = sectionIds.find(
          (id) => intersectingMap.get(id) === true,
        );

        // Always update — fallback to '' when nothing is intersecting
        setActiveSection(firstIntersecting ?? "");
      },
      { rootMargin, threshold: 0 },
    );

    const elements: Element[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        elements.push(el);
        intersectingMap.set(id, false);
      }
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [sectionIds, rootMargin]);
  return activeSection;
}
