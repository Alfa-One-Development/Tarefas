import "./App.css";
import ListaTarefas from "./components/ListaTarefas";
import Header from "./components/Header";
import Pe from "./components/Footer";
import ListaTarefas from "./components/ListaTarefas.jsx"

function App() {
  return (
    <>
      <body>
        <header>
          <Header />
        </header>
        <section>
          <ListaTarefas/>
        </section>
        <footer>
          <Pe />
        </footer>
      </body>
    </>
  );
}

export default App;