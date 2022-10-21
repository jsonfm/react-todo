


// Components
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";

// Services
import { TodosService } from "./services/TodosService";

const todosService = new TodosService();
const todos = todosService.getTodos();

function App() {
  return (
      <div className="container app">
        <h2 class="text-center">Todo<strong>App</strong></h2>
        <TodoCounter todos={todos}/>
        <TodoSearch />
        <TodoList>
          {todos.map((todo, index) => (
            <TodoItem {...todo} key={index}/>
          ))}
        </TodoList>
      </div>
  )
}

export default App;
