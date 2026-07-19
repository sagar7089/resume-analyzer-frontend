import ScoreCircle from "./shared/ScoreCircle";
import { getScoreTone, getMatchLevelStyle, getProbabilityTone } from "./shared/scoreUtils";

export default function ScoreOverview({ overallScore, atsScore, matchLevel, interviewProbability }) {
  const overallTone = getScoreTone(overallScore);
  const atsTone = getScoreTone(atsScore);
  const probTone = getProbabilityTone(interviewProbability?.percentage ?? 0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white/5 rounded-2xl border border-white/10 shadow-sm p-6 flex flex-col items-center text-center">
        <p className="text-sm text-white mb-3">Overall Score</p>
        <ScoreCircle score={overallScore} />
        <p className={`mt-3 text-sm font-medium ${overallTone.text}`}>{overallTone.label}</p>
      </div>

      <div className="bg-white/5 rounded-2xl border border-white/10 shadow-sm p-6 flex flex-col items-center text-center">
        <p className="text-sm text-white mb-3">ATS Score</p>
        <ScoreCircle score={atsScore} />
        <p className={`mt-3 text-sm font-medium ${atsTone.text}`}>{atsTone.label}</p>
      </div>

      <div className="bg-white/5 rounded-2xl border border-white/10 shadow-sm p-6 flex flex-col items-center justify-center text-center">
        <p className="text-sm text-white mb-3">Match Level</p>
        <span className={`px-4 py-1.5 rounded-full font-semibold ${getMatchLevelStyle(matchLevel)}`}>
          {matchLevel}
        </span>
        <p className="mt-3 text-xs text-slate-400">
          Candidate match against job requirements
        </p>
      </div>

      <div className="bg-white/5 rounded-2xl border border-white/10 shadow-sm p-6 flex flex-col items-center justify-center text-center">
        <p className="text-sm text-white mb-3">Interview Probability</p>
        <p className={`text-4xl font-bold ${probTone.text}`}>
          {interviewProbability?.percentage ?? 0}%
        </p>
        <p className={`text-sm font-medium mt-1 ${probTone.text}`}>{probTone.label}</p>
        <p className="mt-2 text-xs text-slate-400">{interviewProbability?.reason}</p>
      </div>
    </div>
  );
}
