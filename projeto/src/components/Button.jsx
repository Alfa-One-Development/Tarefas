import "./styles/Button.css";
import { useState } from "react";

function Botao() {
  const [concluirTarefa, setConcluir] = useState("Concluir");

  function tarefaFeita() {
    if (concluirTarefa == "Concluir") {
      setConcluir(concluirTarefa => concluirTarefa == "Concluido")
    }
  }

  return (
    <article className="articleButton">
      <button onClick={tarefaFeita} className={concluirTarefa}>
        {concluirTarefa}
      </button>
    </article>
  );
}

export default Botao;
