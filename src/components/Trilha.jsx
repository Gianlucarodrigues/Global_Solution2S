import React from "react";
import "../styles/Trilha.css";


export default function Trilha({ trilha }) {
return (
<div className="mt-6">
<h2 className="text-2xl font-semibold mb-4">Trilha sugerida</h2>
<div className="mt-4 space-y-4">
{trilha.map((modulo, idx) => (
<div key={idx} className="p-4 rounded-xl bg-white shadow">
<h3 className="font-semibold text-lg">{modulo.nome}</h3>
<ul className="list-disc ml-6 mt-2 text-sm text-gray-700">
{modulo.conteudo.map((item) => (
<li key={item}>{item}</li>
))}
</ul>
</div>
))}
</div>
</div>
);
}