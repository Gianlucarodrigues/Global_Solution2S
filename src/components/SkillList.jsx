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
    <div className="skilllist-container">
      <h2 className="skilllist-title">Habilidades Necessárias</h2>

      {/* Hard Skills */}
      <h3 className="skilllist-subtitle">Hard Skills</h3>
      {cargo.skills.hard.map((skill) => (
        <label key={skill} className="skill-item">
          <input
            type="checkbox"
            className="skill-checkbox"
            checked={habilidadesConcluidas.includes(skill)}
            onChange={() => handleToggle(skill)}
          />
          <span className="skill-text">{skill}</span>
        </label>
      ))}

      {/* Soft Skills */}
      <h3 className="skilllist-subtitle">Soft Skills</h3>
      {cargo.skills.soft.map((skill) => (
        <label key={skill} className="skill-item">
          <input
            type="checkbox"
            className="skill-checkbox"
            checked={habilidadesConcluidas.includes(skill)}
            onChange={() => handleToggle(skill)}
          />
          <span className="skill-text">{skill}</span>
        </label>
      ))}
    </div>
  );
}
