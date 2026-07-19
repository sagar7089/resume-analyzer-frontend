import { useState } from "react";
import { FiFolder, FiChevronDown, FiChevronUp } from "react-icons/fi";

function ProjectCard({ project }) {
  const [open, setOpen] = useState(true);

  return (
    <div className={`bg-white/5 border ${open ? "border-white/10" : "border-white"}  rounded-xl p-4`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-3">
          <span className="font-medium text-white">{project.projectName}</span>
          <span className="text-xs font-medium text-violet-500 bg-white/5 px-2 py-0.5 rounded-full">
            Relevance: {project.relevance}%
          </span>
        </div>
        {open ? (
          <FiChevronUp className="text-slate-300" />
        ) : (
          <FiChevronDown className="text-slate-300" />
        )}
      </button>

      {open && (
        <div className="mt-3 text-sm">
          <p className="text-violet-500 font-medium mb-1">Feedback</p>
          <p className="text-slate-300 mb-3">{project.feedback}</p>

          {project.improvements?.length > 0 && (
            <>
              <p className="text-violet-500 font-medium mb-1">Improvements</p>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                {project.improvements.map((imp, i) => (
                  <li key={i}>{imp}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default function ProjectAnalysis({ projectAnalysis }) {
  if (!projectAnalysis?.length) return null;

  return (
    <div className="bg-white/5 rounded-2xl border border-white/10 shadow-sm p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-8 h-8 rounded-lg bg-blue-50 text-violet-500 flex items-center justify-center">
          <FiFolder size={16} />
        </span>
        <h3 className="font-semibold text-white">Project Analysis</h3>
      </div>
      <div className="space-y-3">
        {projectAnalysis.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </div>
  );
}
