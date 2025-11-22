import React from "react";
import "../styles/SkillList.css";


export default function SkillList({ cargo, habilidadesConcluidas, setHabilidadesConcluidas }) {
const handleToggle = (skill) => {
setHabilidadesConcluidas((prev) =>
prev.includes(skill)
? prev.filter((s) => s !== skill)
: [...prev, skill]
);
};


return (
<div>
<h2 className="text-2xl font-semibold mb-4">Habilidades Necessárias</h2>


<h3 className="font-semibold mt-4">Hard Skills</h3>
{cargo.skills.hard.map((skill) => (
<label key={skill} className="block mt-1">
<input
type="checkbox"
className="mr-2"
checked={habilidadesConcluidas.includes(skill)}
onChange={() => handleToggle(skill)}
/>
{skill}
</label>
))}


<h3 className="font-semibold mt-4">Soft Skills</h3>
{cargo.skills.soft.map((skill) => (
<label key={skill} className="block mt-1">
<input
type="checkbox"
className="mr-2"
checked={habilidadesConcluidas.includes(skill)}
onChange={() => handleToggle(skill)}
/>
{skill}
</label>
))}
</div>
);
}