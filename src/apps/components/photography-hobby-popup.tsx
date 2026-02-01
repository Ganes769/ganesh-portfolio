import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaCamera, FaTimes, FaExternalLinkAlt } from "react-icons/fa";

const STORAGE_KEY = "photography-popup-seen";
const PEXELS_URL = "https://www.pexels.com/@lostsoul16/";

export default function PhotographyHobbyPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setIsMounted(false);
    }, 300);
  };

  useEffect(() => {
    const seen = sessionStorage.getItem(STORAGE_KEY);
    if (seen) return;

    const showTimer = setTimeout(() => {
      setIsVisible(true);
      setIsMounted(true);
    }, 800);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const autoClose = setTimeout(handleClose, 4000);
    return () => clearTimeout(autoClose);
  }, [isVisible]);

  if (!isMounted) return null;

  const popup = (
    <div
      className={`fixed bottom-4 right-4 z-[9999] origin-bottom-right ${
        isVisible ? "animate-pop-in" : "pointer-events-none opacity-0"
      }`}
      role="dialog"
      aria-label="Photography hobby"
    >
      <div className="relative w-64 rounded-xl border-2 border-black bg-white shadow-[4px_4px_0_#000] transition-all duration-300 hover:shadow-[6px_6px_0_#000] hover:-translate-y-0.5 hover:-translate-x-0.5 animate-float [animation-delay:0.5s]">
        <button
          onClick={handleClose}
          className="absolute -top-1.5 -right-1.5 z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-black bg-white text-black transition-all duration-200 hover:scale-110 hover:bg-black hover:text-white focus:outline-none active:scale-95"
          aria-label="Close"
        >
          <FaTimes className="h-2.5 w-2.5" />
        </button>

        <a
          href={PEXELS_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClose}
          className="group block p-3 pr-8 transition-all duration-300 hover:bg-black rounded-xl active:scale-[0.98]"
        >
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 border-black bg-black text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-white group-hover:text-black group-hover:border-white animate-shutter-blink">
              <FaCamera className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-wide text-black group-hover:text-white transition-colors duration-300 opacity-0 animate-text-reveal-delay">
                Shoots & code
              </p>
              <p className="mt-0.5 text-[11px] text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
                My photos on Pexels →
              </p>
            </div>
            <FaExternalLinkAlt className="h-3 w-3 shrink-0 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:translate-y-[-2px] transition-all duration-300" />
          </div>
        </a>
      </div>
    </div>
  );

  return typeof document !== "undefined"
    ? createPortal(popup, document.body)
    : popup;
}
