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
    const query = e.target.value;
    const results = todosService.search(query);
    setTodos(results);
  };

  const onDelete = (text) => {
    todosService.delete(text);
    setTodos(todosService.getTodos());
  };

  const onComplete = (text) => {
    todosService.toggleCompletedState(text);
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
