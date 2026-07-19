import { FiXCircle, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const statusStyles = {
  Reject: { bg: "bg-red-50", border: "border-red-100", text: "text-red-600", icon: FiXCircle },
  Consider: { bg: "bg-amber-50", border: "border-amber-100", text: "text-amber-600", icon: FiAlertCircle },
  Shortlist: { bg: "bg-violet-50", border: "border-violet-100", text: "text-violet-600", icon: FiCheckCircle },
  "Strong Match": { bg: "bg-emerald-50", border: "border-emerald-100", text: "text-emerald-600", icon: FiCheckCircle },
};

export default function FinalVerdict({ finalVerdict }) {
  const style = statusStyles[finalVerdict.status] || statusStyles.Consider;
  const Icon = style.icon;

  return (
    <div className={`flex items-center gap-4 rounded-2xl border bg-white/5 border-white/10 p-6`}>
      <span className={`w-12 h-12 rounded-full bg-white flex items-center justify-center ${style.text} flex-shrink-0`}>
        <Icon size={22} />
      </span>
      <div>
        <p className={`text-xs font-medium ${style.text}`}>Final Verdict</p>
        <p className={`text-xl font-bold mb-1 ${style.text}`}>{finalVerdict.status}</p>
        <p className="text-sm text-slate-200">{finalVerdict.message}</p>
      </div>
    </div>
  );
}
