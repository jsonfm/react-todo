import "./styles.css";

export const TodoList = ({ children }) => {
    return(
        <>
        <h4>Your tasks:</h4>
        <div class="todo-list">
            {children}
        </div>
        </>
    )
}