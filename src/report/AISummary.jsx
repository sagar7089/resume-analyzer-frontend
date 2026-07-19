import { HiOutlineSparkles } from "react-icons/hi2";

export default function AISummary({ summary }) {
  return (
    <div className="bg-white/5 rounded-2xl border border-white/10 shadow-sm p-6 mb-6 flex items-start gap-4">
      <span className="w-8 h-8 rounded-lg bg-blue-50 text-violet-500 flex items-center justify-center flex-shrink-0">
        <HiOutlineSparkles size={18} />
      </span>
      <div>
        <h3 className="font-semibold text-white mb-2">AI Summary</h3>
        <p className="text-sm text-slate-400 leading-relaxed">{summary}</p>
      </div>
    </div>
  );
}
