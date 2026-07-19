import { FiBriefcase, FiBookOpen } from "react-icons/fi";

export default function ExperienceEducation({ experienceAnalysis, educationAnalysis, formattingAnalysis }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
      <div className="bg-white/5 rounded-2xl border border-white/10 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-blue-50 text-violet-500 flex items-center justify-center">
              <FiBriefcase size={16} />
            </span>
            <h3 className="font-semibold text-white">Experience Analysis</h3>
          </div>
          <span className="text-sm text-white">
            Score: <span className="font-semibold text-slate-200">{experienceAnalysis.score}/100</span>
          </span>
        </div>
        <p className="text-violet-500 text-sm font-medium mb-1">Feedback</p>
        <p className="text-sm text-slate-300 mb-3">{experienceAnalysis.feedback}</p>
        {experienceAnalysis.improvements?.length > 0 && (
          <>
            <p className="text-violet-500 text-sm font-medium mb-1">Improvements</p>
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
              {experienceAnalysis.improvements.map((imp, i) => (
                <li key={i}>{imp}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="bg-white/5 rounded-2xl border border-white/10 shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-8 rounded-lg bg-blue-50 text-violet-500 flex items-center justify-center">
            <FiBookOpen size={16} />
          </span>
          <h3 className="font-semibold text-white">Education & Formatting</h3>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="text-center bg-white/15 rounded-xl py-3">
            <p className="text-xs text-slate-300 mb-1">Education Score</p>
            <p className="text-xl font-bold text-emerald-600">{educationAnalysis.score}/100</p>
          </div>
          <div className="text-center bg-white/15 rounded-xl py-3">
            <p className="text-xs text-slate-300 mb-1">Formatting Score</p>
            <p className="text-xl font-bold text-amber-500">{formattingAnalysis.score}/100</p>
          </div>
        </div>

        <p className="text-xs font-medium text-violet-500 mb-1">Education Feedback</p>
        <p className="text-sm text-slate-300 mb-3">{educationAnalysis.feedback}</p>

        {formattingAnalysis.issues?.length > 0 && (
          <>
            <p className="text-xs font-medium text-violet-500 mb-1">Formatting Issues</p>
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
              {formattingAnalysis.issues.map((issue, i) => (
                <li key={i}>{issue}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
