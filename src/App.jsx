import React, { useState, useEffect } from "react";

// Components
import { TodoCounter } from "@/components/TodoCounter";
import { TodoSearch } from "@/components/TodoSearch";
import { TodoList } from "@/components/TodoList";
import { TodoItem } from "@/components/TodoItem";

import { TodosListSkeleton } from "@/skeletons/TodosListSkeleton";

// Services
import { TodosService } from "@/services/TodosService";

const todosService = new TodosService();
// const todos = todosService.getTodos();

function App() {
  const [todos, setTodos] = useState([]);

  const onSearch = (e) => {
    const query = e.target.value;
    const results = todosService.search(query);
    console.log("results: ", results);
    setTodos(results);
  }

  const renderTodos = () => {
    if(todos.length > 0){
      return todos.map((todo, index) => <TodoItem {...todo} key={`todo-${index}`}/>)
    }
    return <TodosListSkeleton/>
  }

  useEffect(()=>{
    const fetchTodos = async () => {
      const response = await todosService.fetchTodos(1000);
      setTodos(response);
    }
    fetchTodos();
  }, [])

  return (
      <div className="container app">
        <h2 className="text-center">Todo<strong>App</strong></h2>
        <TodoCounter todos={todos} />
        <TodoSearch onSearch={onSearch}/>
        <TodoList>
          {renderTodos()}
        </TodoList>
      </div>
  )
}

export default App;
