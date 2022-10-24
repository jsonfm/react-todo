import './styles.css';

export const TodoList = ({ children }) => {
  return (
    <>
      {/* <h4>Your tasks:</h4> */}
      <div className="todo-list">{children}</div>
    </>
  );
};
