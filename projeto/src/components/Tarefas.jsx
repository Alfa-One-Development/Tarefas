import "./styles/Tarefas.css"
import { useState } from "react";
function Tarefas(props){

    const [concluido, setConcluido] = useState(false);

    function changeButton() {
        setConcluido(true)
    }
    
return(
<article className="article">
<h1 className={concluido ? "concluido" : ""}>{props.tarefa}</h1>
<button onClick={changeButton} disabled={concluido}>
    {concluido ? "Concluido" : "Concluir"}
</button>
</article>
)
}
export default Tarefas;