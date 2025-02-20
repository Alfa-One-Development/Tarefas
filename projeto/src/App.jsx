import "./App.css";
import Header from "./components/Header";
import Pe from "./components/Footer";
import ListaTarefas from "./components/ListaTarefas.jsx";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <ListaTarefas />
      </section>
      <footer>
        <Pe />
      </footer>
    </>
  );
}

export default App;
