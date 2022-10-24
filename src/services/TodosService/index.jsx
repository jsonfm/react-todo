export class TodosService {
  constructor() {
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

  toggleCompletedState = (text, save=false, key="TODOS_V1") => {
    const taskIndex = this.findByText(text);
    this.todos[taskIndex].completed = !this.todos[taskIndex].completed;
    if(save){
      this.saveLocal(key);
    }
  }

  delete = (text, save=false, key="TODOS_V1") => {
    const taskIndex = this.findByText(text);
    this.todos.splice(taskIndex, 1);
    if(save) {
      this.saveLocal(key);
    }
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

  addTodo = (text, save=true, key="TODOS_V1") => {
    const todo = {
      text,
      completed: false
    }
    this.todos.push(todo);
    if(save){
      this.saveLocal(key)
    }
  }

}
