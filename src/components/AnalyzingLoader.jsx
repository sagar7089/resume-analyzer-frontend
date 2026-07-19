import { FiFileText } from "react-icons/fi";

export default function AnalyzingLoader() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6 py-10 bg-gradient-to-br from-black via-[#290d46] to-[#320b70]">
      <div className="relative w-40 h-50 rounded-lg bg-white/5 border border-white/10 overflow-hidden">
        <FiFileText className="absolute inset-0 m-auto text-violet-300/40" size={140} />

        <div className="absolute inset-x-0 top-0 h-full">
          <div className="w-full h-1 bg-violet-500 shadow-[0_0_12px_2px_rgba(167,139,250,0.8)] animate-scan" />
        </div>

       
      </div>

      <div className="text-center">
        <p className="text-white font-bold text-3xl">Analyzing your resume</p>
        <p className="text-sm text-purple-300/70 mt-1">
          Comparing skills, experience, and keywords against the job description
        </p>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          50% { transform: translateY(192px); }
          100% { transform: translateY(0); }
        }
        .animate-scan {
          animation: scan 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
