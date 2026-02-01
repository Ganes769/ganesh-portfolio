import { useEffect, useRef, useState, ReactNode } from "react";

type ScrollFadeInUpProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  /** Distance in px to move up when animating (default 24) */
  offsetY?: number;
  /** Viewport threshold 0–1 to trigger animation (default 0.1) */
  threshold?: number;
};

export default function ScrollFadeInUp({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
  offsetY = 24,
  threshold = 0.1,
}: ScrollFadeInUpProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : `translateY(${offsetY}px)`,
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </div>
  );
}
