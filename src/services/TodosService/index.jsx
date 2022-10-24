export class TodosService {
  constructor(props) {
    this.todos = [];
  }

  sleep = async (ms = 1000) => {
    return await new Promise((resolve) => setTimeout(resolve, ms));
  }

  fetchTodos = async(delay = 1000, key="TODOS_V1") =>{
    await this.sleep(delay);
    this.todos = this.getLocal(key);
    return this.getTodos();
  }

  getTodos = () => {
    return [...this.todos];
  }

  getCompletedTodos = () => {
    return this.todos.filter((todo) => todo.completed);
  }

  findByText = (text) => {
    return this.todos.findIndex((todo) => 
      todo.text.toLowerCase().includes(text.toLowerCase())
    );
  }

  search = (query) => {
    return this.todos.filter(({ text }) =>
      text.toLowerCase().includes(query.toLowerCase())
    );
  }

  toggleCompletedState = (text) => {
    const taskIndex = this.findByText(text);
    this.todos[taskIndex].completed = !this.todos[taskIndex].completed;
  }

  delete = (text) => {
    const taskIndex = this.findByText(text);
    this.todos.splice(taskIndex, 1);
  }

  saveLocal = (key="TODOS_V1") => {
    const todos = this.todos;
    const string = JSON.stringify(todos);
    localStorage.setItem(key, string);
  }

  getLocal = (key="TODOS_V1") => {
    const localTodos = localStorage.getItem(key);
    if(!localTodos){
      this.saveLocal("TODOS_V1", []);
      return [];
    }
    return JSON.parse(localTodos);
  }

}
