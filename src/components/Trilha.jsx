import React from "react";
import "../styles/Trilha.css";

export default function Trilha({ trilha }) {
  return (
    <div className="trilha-container">
      <h2 className="trilha-title">Trilha sugerida</h2>

      <div className="trilha-modulos">
        {trilha.map((modulo, idx) => (
          <div key={idx} className="trilha-card">
            <h3>{modulo.nome}</h3>

            <ul>
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
