const todos = [
    {
      text: 'Aprender Javascript',
      completed: true,
    },
    {
      text: 'Tomar el curso de React',
      completed: false,
    },
    {
      text: 'Diseñar páginar web',
      completed: true,
    },
]

export class TodosService {
    constructor(){
        this.todos = todos;
    }

    async sleep(ms=1000){
      return await new Promise(resolve => setTimeout(resolve, ms));
    }

    async fetchTodos(delay=1000){
      await this.sleep(delay);
      return this.todos;
    }

    getTodos() {
        return [...this.todos];
    }

    getCompletedTodos() {
        return this.todos.filter(todo => todo.completed);
    }

    findByText(text) {
      return this.todos.findIndex(todo => todo.text === text);
    }

    search(query) {
        return this.todos.filter(({ text }) => text.toLowerCase().includes(query.toLowerCase()));
    }

    toggleCompletedState(text){
      const taskIndex = this.findByText(text);
      this.todos[taskIndex].completed = !this.todos[taskIndex].completed;
    }


    delete (text) {
      const taskIndex = this.findByText(text);
      this.todos.splice(taskIndex, 1);
    }

}