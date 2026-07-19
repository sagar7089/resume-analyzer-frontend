const variants = {
  matched: "bg-emerald-50 text-emerald-700 border-emerald-100",
  missing: "bg-red-50 text-red-600 border-red-100",
  neutral: "bg-blue-50 text-blue-700 border-blue-100",
  purple: "bg-violet-50 text-violet-700 border-violet-100",
  toAdd : "bg-amber-50 text-amber-700 border-amber-100"
};

export default function Tag({ children, variant = "neutral" }) {
  return (
    <span
      className={`inline-block px-3 py-1 text-sm rounded-full border ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
