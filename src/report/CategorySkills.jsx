import { FiBarChart2, FiTool } from "react-icons/fi";
import ScoreBar from "./shared/ScoreBar";
import Tag from "./shared/Tag";

export default function CategorySkills({ categoryScores, matchedSkills, missingSkills }) {
  const categories = [
    { label: "Skills", score: categoryScores.skills },
    { label: "Experience", score: categoryScores.experience },
    { label: "Projects", score: categoryScores.projects },
    { label: "Education", score: categoryScores.education },
    { label: "ATS Compatibility", score: categoryScores.atsCompatibility },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
      <div className="bg-white/5 rounded-2xl border border-white/10 shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <FiBarChart2 size={16} />
          </span>
          <h3 className="font-semibold text-white">Category Scores</h3>
        </div>
        {categories.map((c) => (
          <ScoreBar key={c.label} label={c.label} score={c.score} />
        ))}
      </div>

      <div className="bg-white/5 rounded-2xl border border-white/10 shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <FiTool size={16} />
          </span>
          <h3 className="font-semibold text-white">Skills Analysis</h3>
        </div>

        <p className="text-sm font-medium text-emerald-600 mb-2">Matched Skills</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {matchedSkills.map((s) => (
            <Tag key={s.skill} variant="matched">{s.skill}</Tag>
          ))}
        </div>

        <p className="text-sm font-medium text-red-600 mb-2">Missing Skills</p>
        <div className="flex flex-wrap gap-2">
          {missingSkills.map((s) => (
            <Tag key={s.skill} variant="missing">{s.skill}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
