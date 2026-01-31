type TimeLineProps = {
  company: {
    name: string;
    duration: string;
    role: string;
  };
  contribute: string[];
};

export default function TimeLine({ company, contribute }: TimeLineProps) {
  return (
    <div className="flex gap-4 py-5 border-b border-gray-200 last:border-0 last:pb-0 first:pt-0">
      <div className="flex flex-col items-center shrink-0">
        <div className="w-3 h-3 rounded-full bg-black border-2 border-black shrink-0 mt-1.5" />
        <div className="w-px flex-1 min-h-[20px] bg-gray-300 mt-1" aria-hidden />
      </div>
      <div className="grow min-w-0 pb-1">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
          <span className="font-bold text-black">{company.name}</span>
          <span className="text-xs text-gray-500 whitespace-nowrap">{company.duration}</span>
        </div>
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wide mb-2">
          {company.role}
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
          {contribute.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
