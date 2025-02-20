
function concluirTarefa(props) {

    const [concluirTarefa, setConcluir] = useState("Concluir")
  
  function concluirTarefa(){
    if (seguir == "Concluir"){
    setSeguir("Concluido")
    } 
  }
  
      return (
            <article>
              <h1>{props.nome}</h1>
              <p>{props.descrição}</p>
              <button onClick={concluirTarefa} className={Concluir}>{Concluir}</button>
            </article>
      )
  }

  export default botao