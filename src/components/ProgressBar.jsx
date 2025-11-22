import "../styles/ProgressBar.css";



export default function ProgressBar({ progresso }) {
return (
<div className="mb-6">
<div className="w-full bg-gray-200 rounded-full h-4">
<div
className="h-4 bg-green-500 rounded-full transition-all"
style={{ width: `${progresso}%` }}
></div>
</div>
<p className="text-sm mt-1">Progresso: {progresso}%</p>
</div>
);
}

