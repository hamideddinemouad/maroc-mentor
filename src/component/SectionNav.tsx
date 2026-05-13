"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "accueil", label: "Accueil" },
  { id: "parcours", label: "Parcours" },
  { id: "contact", label: "Contact" },
];

export default function SectionNav() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    if (sectionElements.length === 0) {
      return;
    }

    let ticking = false;

    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const viewportMarker = scrollY + window.innerHeight * 0.42;
      const pageBottom = scrollY + window.innerHeight;

      if (pageBottom >= document.documentElement.scrollHeight - 24) {
        setActiveSection(sectionElements[sectionElements.length - 1].id);
        ticking = false;
        return;
      }

      let nextActiveSection = sectionElements[0].id;

      for (const section of sectionElements) {
        if (section.offsetTop <= viewportMarker) {
          nextActiveSection = section.id;
        } else {
          break;
        }
      }

      setActiveSection(nextActiveSection);
      ticking = false;
    };

    const requestSectionUpdate = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateActiveSection);
      }
    };

    requestSectionUpdate();
    window.addEventListener("scroll", requestSectionUpdate, { passive: true });
    window.addEventListener("resize", requestSectionUpdate);

    return () => {
      window.removeEventListener("scroll", requestSectionUpdate);
      window.removeEventListener("resize", requestSectionUpdate);
    };
  }, []);

  return (
    <nav
      aria-label="Navigation des sections"
      className="fixed right-4 top-4 z-40 sm:right-6 sm:top-6 md:right-10 lg:right-14"
    >
      <div className="flex items-center justify-center gap-1 rounded-full border border-white/10 bg-[#07101b]/78 p-1 shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:gap-0 sm:p-1.5">
        {sections.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={isActive ? "page" : undefined}
              className={`inline-flex min-h-9 items-center justify-center rounded-full px-3 text-[0.62rem] font-semibold uppercase tracking-[0.14em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b000] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07101b] sm:min-h-11 sm:px-4 sm:text-[0.72rem] sm:tracking-[0.18em] ${
                isActive
                  ? "bg-[#d4b000] text-[#08111d]"
                  : "cursor-pointer text-white/68 hover:bg-white/6 hover:text-white"
              }`}
            >
              {section.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
