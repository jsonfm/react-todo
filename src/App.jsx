import React, { useContext } from 'react';

// Components
import { TodoCounter } from '@/components/TodoCounter';
import { TodoSearch } from '@/components/TodoSearch';
import { TodoList } from '@/components/TodoList';
import { TodoItem } from '@/components/TodoItem';
import { TodoForm } from '@/components/TodoForm';
import { CreateTodoButton } from '@/components/CreateTodoButton';
import { AddTodoModal } from '@/components/AddTodoModal';

import { TodosListSkeleton } from '@/skeletons/TodosListSkeleton';

import { TodosContext } from '@/store/context';

function App() {
  const { loading, todos, onDelete, onComplete, onSearch, openModal, setOpenModal } =
    useContext(TodosContext);

  const renderTodos = () => {
    if (todos.length > 0) {
      return todos.map((todo, index) => (
        <TodoItem {...todo} key={`todo-${index}`} onDelete={onDelete} onComplete={onComplete} />
      ));
    }
    if (!loading) {
      return <p>Add a todo.</p>;
    }
  };

  return (
    <div className="container app">
      <h2 className="text-center">
        Todo<strong>App</strong>
      </h2>
      <TodoCounter todos={todos} />
      <TodoSearch onSearch={onSearch} />
      <TodoList>
        {!!loading && <TodosListSkeleton />}
        {renderTodos()}
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} />

      {!!openModal && (
        <AddTodoModal>
          <TodoForm />
        </AddTodoModal>
      )}
    </div>
  );
}

export default App;
