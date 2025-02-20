import Botao from './Button';
function Tarefas(props){
    
return(
<article>
<h1>{props.tarefa}</h1>
<Botao/>
</article>
)
}
export default Tarefas;