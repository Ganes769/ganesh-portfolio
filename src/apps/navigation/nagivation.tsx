import { useState } from "react";
import { SECTION_IDS } from "@pages/landing/SinglePage";

const navItems = [
  { label: "Intro", href: `#${SECTION_IDS.intro}` },
  { label: "About", href: `#${SECTION_IDS.about}` },
  { label: "Skills", href: `#${SECTION_IDS.skills}` },
  { label: "Experience", href: `#${SECTION_IDS.experience}` },
  { label: "Projects", href: `#${SECTION_IDS.projects}` },
  { label: "Contact", href: `#${SECTION_IDS.contact}` },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <a
            href={`#${SECTION_IDS.intro}`}
            className="text-lg font-semibold text-black hover:text-gray-600 transition-colors"
            onClick={handleNavClick}
          >
            Ganesh Gnawali
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-lg text-gray-600 hover:text-black hover:bg-gray-100 font-medium text-sm transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-black font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
