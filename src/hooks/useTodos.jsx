import React, { useState } from 'react';
import { TodosService } from '@/services/TodosService';

import { useLocalStorage } from '@/hooks/useLocalStorage';

export const useTodos = () => {
  const todosService = new TodosService();
  const [todos, setTodos, loading, error] = useLocalStorage('TODOS_V1', []);
  const [openModal, setOpenModal] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  let filtered = [];
  if(!searchValue.length >= 1){
    filtered = todos;
  }else {
    todosService.todos = todos;
    filtered = todosService.search(searchValue);
  }

  const onSearch = (e) => {
    todosService.todos = todos;
    const query = e.target.value;
    setSearchValue(query);
  };

  const onDelete = (text) => {
    todosService.todos = todos;
    todosService.delete(text, true, 'TODOS_V1');
    setTodos(todosService.getTodos());
  };

  const onComplete = (text) => {
    todosService.todos = todos;
    todosService.toggleCompletedState(text, true, 'TODOS_V1');
    setTodos(todosService.getTodos());
  };

  const onAddTodo = (text) => {
    todosService.todos = todos;
    todosService.addTodo(text, true, 'TODOS_V1');
    setTodos(todosService.getTodos());
  };

  return (
    {
        todos,
        filtered,
        loading,
        error,
        onSearch,
        onDelete,
        onComplete,
        onAddTodo,
        openModal,
        setOpenModal
      }
  );
};
