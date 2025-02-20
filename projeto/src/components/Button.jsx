
function Perfill(props) {

    const [concluirTarefa, setConcluir] = useState("Concluir")
  
  function concluirTarefa(){
    if (seguir == "Concluir"){
    setSeguir("Concluido")
    } 
  }
  
      return (
            <article>
              <h1>{props.nome}</h1>
              <img src={props.img} alt="Foto de Perfil" />
              <p>{props.descrição}</p>
              <button onClick={concluirTarefa} className={seguir}>{seguir}</button>
            </article>
      )
  }

  export default botao