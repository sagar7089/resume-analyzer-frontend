export function getScoreTone(score) {
  if (score >= 75) return { label: "Strong", text: "text-emerald-500" };
  if (score >= 50) return { label: "Average", text: "text-amber-500" };
  return { label: "Needs Improvement", text: "text-red-500" };
}

export function getMatchLevelStyle(matchLevel) {
  const styles = {
    Excellent: "bg-emerald-50 text-emerald-500",
    Good: "bg-emerald-50 text-emerald-500",
    Adequate: "bg-amber-50 text-amber-500",
    Weak: "bg-red-50 text-red-500",
    Poor: "bg-red-50 text-red-500",
  };
  return styles[matchLevel] || "bg-slate-50 text-slate-600";
}

export function getProbabilityTone(percentage) {
  if (percentage >= 60) return { label: "High Chance", text: "text-emerald-500" };
  if (percentage >= 30) return { label: "Moderate Chance", text: "text-amber-500" };
  return { label: "Low Chance", text: "text-red-500" };
}
