import React, { useContext } from "react";

// Components
import { TodoCounter } from "@/components/TodoCounter";
import { TodoSearch } from "@/components/TodoSearch";
import { TodoList } from "@/components/TodoList";
import { TodoItem } from "@/components/TodoItem";

import { TodosListSkeleton } from "@/skeletons/TodosListSkeleton";

import { TodosContext } from "@/store/context";

function App() {
  const { todos, onDelete, onComplete, onSearch } = useContext(TodosContext);

  const renderTodos = () => {
    if (todos.length > 0) {
      return todos.map((todo, index) => (
        <TodoItem
          {...todo}
          key={`todo-${index}`}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ));
    }
    return <TodosListSkeleton />;
  };

  return (
    <div className="container app">
      <h2 className="text-center">
        Todo<strong>App</strong>
      </h2>
      <TodoCounter todos={todos} />
      <TodoSearch onSearch={onSearch} />
      <TodoList>{renderTodos()}</TodoList>
    </div>
  );
}

export default App;
