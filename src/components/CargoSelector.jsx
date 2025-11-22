import React from "react";
import "../styles/CargoSelector.css";

export default function CargoSelector({ cargos, onSelect }) {
return (
<div>
<h2 className="text-xl mb-4">Escolha seu objetivo profissional:</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{Object.keys(cargos).map((cargo) => (
<button
key={cargo}
onClick={() => onSelect(cargos[cargo])}
className="p-4 rounded-xl shadow bg-white hover:bg-gray-100 text-left"
>
<h3 className="font-semibold text-lg">{cargo}</h3>
<p className="text-sm text-gray-600">Ver habilidades e trilha</p>
</button>
))}
</div>
</div>
);
}