import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import "../styles/Login.css";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    senha: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fazerLoginFake = () => {
    if (form.email === "" || form.senha === "") {
      alert("Preencha todos os campos!");
      return;
    }

    navigate("/skillmatch");
  };
navigate("/skillmatch", {
  state: {
    mensagem: "Bem-vindo ao SkillMatch! Aqui você poderá explorar competências essenciais, trilhas de desenvolvimento e oportunidades para evoluir na sua carreira."
  }
});

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>

        <Input
          label="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          name="email"
        />

        <Input
          label="Senha"
          type="password"
          value={form.senha}
          onChange={handleChange}
          name="senha"
        />

        <Button onClick={fazerLoginFake}>Entrar</Button>
      </div>
    </div>
  );
}
