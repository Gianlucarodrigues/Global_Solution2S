import "../styles/Input.css";

export default function Input({ label, type = "text", value, onChange, name }) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className="input"
      />
    </div>
  );
}
