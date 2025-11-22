import React from "react";
import "../styles/CargoSelector.css";

export default function CargoSelector({ cargos, onSelect }) {
  return (
    <div className="cargo-selector">
      <h2 className="cargo-selector-title">Escolha seu objetivo profissional:</h2>

      <div className="cargo-grid">
        {Object.keys(cargos).map((cargo) => (
          <button
            key={cargo}
            onClick={() => onSelect(cargos[cargo])}
            className="cargo-card"
          >
            <h3>{cargo}</h3>
            <p>Ver habilidades e trilha</p>
          </button>
        ))}
      </div>
    </div>
  );
}
