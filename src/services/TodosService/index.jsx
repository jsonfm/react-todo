const todos = [
    {
      text: 'Cortar cebolla',
      completed: true,
    },
    {
      text: 'Tomar el curso de React',
      completed: false,
    },
    {
      text: 'Llorar con la llorona',
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
        return this.todos;
    }

    getCompletedTodos() {
        return this.todos.filter(todo => todo.completed);
    }

    search(query) {
        return this.todos.filter(({ text }) => text.toLowerCase().includes(query.toLowerCase()));
    }

    update(){
      return;
    }

    delete(id){
      return;
    }

}