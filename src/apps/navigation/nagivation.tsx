import { useState } from "react";
import { SECTION_IDS } from "@pages/landing/SinglePage";

const navItems = [
  { label: "Skills", href: `#${SECTION_IDS.skills}` },
  { label: "Experience", href: `#${SECTION_IDS.experience}` },
  { label: "Education", href: `#${SECTION_IDS.education}` },
  { label: "Projects", href: `#${SECTION_IDS.projects}` },
  { label: "Contact", href: `#${SECTION_IDS.contact}` },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-shadow duration-300">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <a
            href={`#${SECTION_IDS.intro}`}
            className="text-lg font-semibold text-black hover:text-gray-600 transition-colors duration-200"
            onClick={handleNavClick}
          >
            Ganesh Gnawali
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-lg text-gray-600 hover:text-black hover:bg-gray-100 font-medium text-sm transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 active:scale-95 transition-all duration-200"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <svg
              className="w-6 h-6 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay – does not push content down */}
      <div
        className={`absolute left-0 right-0 top-14 sm:top-16 z-50 md:hidden overflow-hidden bg-white border-b border-gray-200 shadow-lg transition-all duration-300 ease-out ${
          mobileOpen
            ? "max-h-80 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-black font-medium transition-all duration-200"
              style={{
                transitionDelay: mobileOpen ? `${i * 40}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(-8px)",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
