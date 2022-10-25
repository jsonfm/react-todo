import './styles.css';

export const TodoList = ({ 
  error,
  loading, 
  filtered,
  onLoading,
  onError,
  onEmpity,
  render,
}) => {
  return (
    <>
      <div className="todo-list">
        {error && onError()}
        {loading && onLoading()}
        {(!loading && filtered.length == 0) && onEmpity()} 
        {filtered.map(render)}
      </div>
    </>
  );
};
