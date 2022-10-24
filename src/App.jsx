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

import { TodosContext } from '@/store/context';

function App() {
  const { loading, todos, filtered, onDelete, onComplete, onSearch, openModal, setOpenModal } =
    useContext(TodosContext);

  const renderTodos = () => {
    if (filtered.length > 0) {
      return filtered.map((todo, index) => (
        <TodoItem {...todo} key={`todo-${index}`} onDelete={onDelete} onComplete={onComplete} />
      ));
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
        {!loading && filtered.length == 0 && <EmpityList/>}
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
