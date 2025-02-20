import Tarefas from './Tarefas';
import './styles/ListaTarefas.css'
function ListaTarefas(){
    return(
        <>
        <div className='Lista'>
            <Tarefas
            tarefa = "Jogar 'The President-Brazil Edition'"
            />
            <Tarefas
            tarefa = "Estudar Java Script"
            />
            <Tarefas
            tarefa = "Fazer um site sobre React"
            />
            <Tarefas
            tarefa = "Escrever um texto sobre React" 
            />
            <Tarefas
            tarefa = "William zerar o jogo 'The President-Brazil Edition'"
            />
            <Tarefas
            tarefa = "Fazer a atividade 'Lista De Tarefas'"
            />
        </div>
        </>
    )
}
export default ListaTarefas
