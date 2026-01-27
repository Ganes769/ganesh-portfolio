import { useEffect, useState, ReactNode } from "react";

type FadeInUpProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
};

export default function FadeInUp({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}: FadeInUpProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure smooth animation start
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-all ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transitionTimingFunction: "ease-out",
      }}
    >
      {children}
    </div>
  );
}
