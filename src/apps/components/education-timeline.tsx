const education = [
  {
    institution: "University of East London",
    duration: "2025 – Present",
    qualification: "Master of Computer Science",
    note: "BCS affiliated",
    location: "United Kingdom",
  },
  {
    institution: "Butwal Multiple Campus",
    duration: "2019 – 2024",
    qualification: "BSc CSIT (Computer Science and Information Technology)",
    note: "Tribhuvan University affiliated",
    location: "Butwal, Rupandehi, Nepal",
  },
];

export function EducationTimeLine() {
  return (
    <div className="space-y-0">
      {education.map((item, i) => (
        <div
          key={i}
          className="flex gap-4 py-5 border-b border-gray-200 last:border-0 last:pb-0"
        >
          <div className="flex flex-col items-center shrink-0">
            <div className="w-3 h-3 rounded-full bg-black border-2 border-black shrink-0 mt-1.5" />
            {i < education.length - 1 && (
              <div className="w-px flex-1 min-h-[20px] bg-gray-300 mt-1" aria-hidden />
            )}
          </div>
          <div className="grow min-w-0 pb-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <span className="font-bold text-black">{item.institution}</span>
              <span className="text-xs text-gray-500 whitespace-nowrap">{item.duration}</span>
            </div>
            <p className="text-xs font-medium text-gray-600 uppercase tracking-wide mb-0.5">
              {item.qualification}
            </p>
            {item.note && (
              <p className="text-xs text-gray-500 mb-0.5">{item.note}</p>
            )}
            <p className="text-xs text-gray-600">{item.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
