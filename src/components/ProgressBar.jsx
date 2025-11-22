import "../styles/ProgressBar.css";

export default function ProgressBar({ progresso }) {
  return (
    <div className="progress-container">
      <div className="progress-background">
        <div
          className="progress-fill"
          style={{ width: `${progresso}%` }}
        ></div>
      </div>
      <p className="progress-text">Progresso: {progresso}%</p>
    </div>
  );
}
