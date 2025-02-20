
function concluirTarefa(props) {

    const [concluirTarefa, setConcluir] = useState("Concluir")
  
  function concluirTarefa(){
    if (seguir == "Concluir"){
    setSeguir("Concluido")
    } 
  }
  
      return (
            <article>
              <button onClick={concluirTarefa} className={Concluir}>{Concluir}</button>
            </article>
      )
  }

  export default botao