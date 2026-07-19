import { FiFileText, FiRefreshCw, FiDownload } from "react-icons/fi";

export default function ReportHeader({ onAnalyzeAgain, handleDownload }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 bg-white/5 rounded-2xl border border-white/10 shadow-sm px-6 py-4 mb-6">
      <div className="flex items-center gap-3">
        <span className="w-9 h-9 rounded-lg bg-blue-50 text-violet-600 flex items-center justify-center">
          <FiFileText size={18} />
        </span>
        <span className="font-semibold text-violet-600">Resume Analyzer</span>
        <span className="text-slate-300">|</span>
        <span className="font-medium text-slate-200">Resume Analysis Report</span>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={onAnalyzeAgain}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-violet-600 border border-white/10 rounded-xl hover:bg-slate-50 transition"
        >
          <FiRefreshCw size={14} /> Analyze Again
        </button>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-violet-500 rounded-xl hover:bg-violet-700 transition"
        >
          <FiDownload size={14} /> Download PDF
        </button>
      </div>
    </div>
  );
}
