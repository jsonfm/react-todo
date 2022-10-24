import React, { useState } from "react";
import { TodosContext } from "./context";
import { TodosService } from "@/services/TodosService";

import { useLocalStorage } from "@/hooks/useLocalStorage";

export const TodosProvider = ({ children }) => {
  const todosService = new TodosService();
  const [todos, setTodos, loading, error ] = useLocalStorage("TODOS_V1", []);
  const [openModal, setOpenModal] = useState(false);

  const onSearch = (e) => {
    todosService.todos = todos;
    const query = e.target.value;
    const results = todosService.search(query);
    setTodos(results);
  };

  const onDelete = (text) => {
    todosService.todos = todos;
    todosService.delete(text, true, "TODOS_V1");
    setTodos(todosService.getTodos());
  };

  const onComplete = (text) => {
    todosService.todos = todos;
    todosService.toggleCompletedState(text, true, "TODOS_V1");
    setTodos(todosService.getTodos());
  };

  const onAddTodo = (text) => {
    todosService.todos = todos;
    todosService.addTodo(text, true, "TODOS_V1");
    setTodos(todosService.getTodos());
  }

  return (
    <TodosContext.Provider
      value={{
        todos,
        loading,
        error,
        onSearch,
        onDelete,
        onComplete,
        onAddTodo,
        openModal,
        setOpenModal
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
