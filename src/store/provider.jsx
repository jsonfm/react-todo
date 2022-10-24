import React, { useState, useEffect } from "react";
import { TodosContext } from "./context";
import { TodosService } from "@/services/TodosService";

export const TodosProvider = ({ children }) => {
  const todosService = new TodosService();
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await todosService.fetchTodos(1000);
      setTodos(response);
      setLoading(false);
    };
    fetchTodos();
  }, []);

  const onSearch = (e) => {
    todosService = todos;
    const query = e.target.value;
    const results = todosService.search(query);
    setTodos(results);
  };

  const onDelete = (text) => {
    todosService = todos;
    todosService.delete(text);
    todosService.saveLocal("TODOS_V1");
    setTodos(todosService.getTodos());
  };

  const onComplete = (text) => {
    todosService.todos = todos;
    todosService.toggleCompletedState(text);
    todosService.saveLocal("TODOS_V1");
    setTodos(todosService.getTodos());
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        loading,
        onSearch,
        onDelete,
        onComplete,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
