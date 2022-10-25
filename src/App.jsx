import React, { useContext } from 'react';

// Components
import { TodoCounter } from '@/components/TodoCounter';
import { TodoSearch } from '@/components/TodoSearch';
import { TodoList } from '@/components/TodoList';
import { TodoItem } from '@/components/TodoItem';
import { TodoForm } from '@/components/TodoForm';
import { CreateTodoButton } from '@/components/CreateTodoButton';
import { AddTodoModal } from '@/components/AddTodoModal';
import { EmpityList } from '@/components/EmpityList';
import { TodosListSkeleton } from '@/skeletons/TodosListSkeleton';

import { useTodos } from "@/hooks/useTodos";

function App() {
  const { 
    error,
    loading, 
    todos, 
    filtered, 
    onDelete, 
    onComplete, 
    onSearch, 
    onAddTodo,
    openModal, 
    setOpenModal,
  } = useTodos();

  return (
    <div className="container app">
      <h2 className="text-center">
        Todo<strong>App</strong>
      </h2>
      <TodoCounter todos={todos} />
      <TodoSearch onSearch={onSearch} />
      <TodoList
        error={error}
        loading={loading}
        filtered={filtered}
        onError={() => <p>Error</p>}
        onLoading={() => <TodosListSkeleton />}
        onEmpity={() => <EmpityList/>}
        render={(todo, index) => (
          <TodoItem
            {...todo} 
            key={`todo-${index}`} 
            onDelete={onDelete}
            onComplete={onComplete}
          />
        )}
      />

      <CreateTodoButton setOpenModal={setOpenModal} />

      {!!openModal && (
        <AddTodoModal>
          <TodoForm 
            onAddTodo={onAddTodo} 
            setOpenModal={setOpenModal} 
          />
        </AddTodoModal>
      )}
    </div>
  );
}

export default App;
