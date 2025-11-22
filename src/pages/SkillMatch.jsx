
import { useState } from "react";
import CargoSelector from "../components/CargoSelector";
import SkillList from "../components/SkillList";
import Trilha from "../components/Trilha";
import ProgressBar from "../components/ProgressBar";
import "../styles/SkillMatch.css";

export default function SkillMatch() {
  const cargos = {
    "Analista de Dados": {
      skills: {
        hard: ["Python", "SQL", "Power BI", "Estatística"],
        soft: ["Comunicação", "Pensamento analítico", "Organização"],
      },
      trilha: [
        {
          nome: "Fundamentos",
          conteudo: [
            "Lógica de programação",
            "Introdução a dados",
            "Como usar SQL",
          ],
        },
        {
          nome: "Ferramentas",
          conteudo: ["Python para dados", "Power BI na prática"],
        },
        {
          nome: "Projetos",
          conteudo: [
            "Dashboard de vendas",
            "Análise exploratória de dataset público",
          ],
        },
      ],
    },
    "Dev Front-end": {
      skills: {
        hard: ["HTML", "CSS", "JavaScript", "React"],
        soft: ["Criatividade", "Trabalho em equipe", "Comunicação visual"],
      },
      trilha: [
        {
          nome: "Fundamentos",
          conteudo: ["HTML básico", "CSS básico", "JS básico"],
        },
        {
          nome: "Ferramentas",
          conteudo: ["React", "Git e GitHub"],
        },
        {
          nome: "Projetos",
          conteudo: [
            "Landing page",
            "Dashboard simples",
            "Pequena biblioteca JS",
          ],
        },
      ],
    },
  };

  const [cargoSelecionado, setCargoSelecionado] = useState(null);
  const [habilidadesConcluidas, setHabilidadesConcluidas] = useState([]);

  const totalSkills = cargoSelecionado
    ? cargoSelecionado.skills.hard.length +
      cargoSelecionado.skills.soft.length
    : 0;

  const progresso = cargoSelecionado
    ? Math.round((habilidadesConcluidas.length / totalSkills) * 100)
    : 0;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">SkillMatch</h1>

      {!cargoSelecionado ? (
        <CargoSelector cargos={cargos} onSelect={setCargoSelecionado} />
      ) : (
        <div>
          <button
            className="mb-4 text-blue-600 underline"
            onClick={() => {
              setCargoSelecionado(null);
              setHabilidadesConcluidas([]);
            }}
          >
            Voltar
          </button>

          <ProgressBar progresso={progresso} />

          <SkillList
            cargo={cargoSelecionado}
            habilidadesConcluidas={habilidadesConcluidas}
            setHabilidadesConcluidas={setHabilidadesConcluidas}
          />

          <Trilha trilha={cargoSelecionado.trilha} />
        </div>
      )}
    </div>
  );
}

