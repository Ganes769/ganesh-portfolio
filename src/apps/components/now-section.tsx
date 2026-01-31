import { useState, useEffect } from "react";

const LONDON_TZ = "Europe/London";
const STATUS = "Available for work · Open to roles";

export default function NowSection() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeString = now.toLocaleTimeString("en-GB", {
    timeZone: LONDON_TZ,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const dayName = now.toLocaleDateString("en-GB", {
    timeZone: LONDON_TZ,
    weekday: "long",
  });

  return (
    <section
      className="py-6 sm:py-8 bg-gray-50 border-b border-gray-200"
      aria-label="Current time and availability"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">
          {dayName} · London
        </p>
        <p className="text-2xl sm:text-3xl font-bold text-black tabular-nums">
          {timeString}
        </p>
        <p className="mt-2 text-sm text-gray-600">{STATUS}</p>
      </div>
    </section>
  );
}
