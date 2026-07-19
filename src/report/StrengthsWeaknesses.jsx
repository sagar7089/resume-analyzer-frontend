import { FiCheckCircle, FiAlertTriangle } from "react-icons/fi";

export default function StrengthsWeaknesses({ strengths, weaknesses, extraHighlights = [] }) {
  const allStrengths = [...strengths, ...extraHighlights];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
      <div className="bg-white/5 rounded-2xl border border-white/10 shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <FiCheckCircle size={16} />
          </span>
          <h3 className="font-semibold text-white">Strengths</h3>
        </div>
        <ul className="space-y-2">
          {allStrengths.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
              <FiCheckCircle className="text-emerald-500 mt-0.5 flex-shrink-0" size={14} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white/5 rounded-2xl border border-white/10 shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
            <FiAlertTriangle size={16} />
          </span>
          <h3 className="font-semibold text-white">Weaknesses</h3>
        </div>
        <ul className="space-y-2">
          {weaknesses.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
              <FiAlertTriangle className="text-red-500 mt-0.5 flex-shrink-0" size={14} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
