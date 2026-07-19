import { HiOutlineLightBulb } from "react-icons/hi2";
import { FiStar } from "react-icons/fi";

function PriorityColumn({ title, items, colorClass, dotClass }) {
  if (!items?.length) return null;
  return (
    <div>
      <p className={`text-sm font-semibold mb-3 ${colorClass}`}>{title}</p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-200 bg-white/15 rounded-lg p-2">
            <FiStar className={`mt-0.5 flex-shrink-0 ${dotClass}`} size={13} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Recommendations({ recommendations, atsKeywordsToAdd = [], missingResumeSections = [] }) {
  const medium = [
    ...(recommendations.mediumPriority || []),
    ...(atsKeywordsToAdd.length ? [`Add these ATS keywords: ${atsKeywordsToAdd.join(", ")}`] : []),
  ];
  const low = [
    ...(recommendations.lowPriority || []),
    ...missingResumeSections.map((s) => `Consider adding: ${s}`),
  ];

  return (
    <div className="bg-white/5 rounded-2xl border border-white/10 shadow-sm p-6 mb-6">
      <div className="flex items-center gap-2 mb-5">
        <span className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
          <HiOutlineLightBulb size={16} />
        </span>
        <h3 className="font-semibold text-white">Recommendations</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PriorityColumn
          title="High Priority"
          items={recommendations.highPriority}
          colorClass="text-red-600"
          dotClass="text-red-500"
        />
        <PriorityColumn
          title="Medium Priority"
          items={medium}
          colorClass="text-amber-600"
          dotClass="text-amber-500"
        />
        <PriorityColumn
          title="Low Priority"
          items={low}
          colorClass="text-emerald-600"
          dotClass="text-emerald-500"
        />
      </div>
    </div>
  );
}
