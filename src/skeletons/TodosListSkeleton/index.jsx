import "./styles.css";

export const TodoListSkeleton = ({ children }) => {
    return(
        <>
        <h4>Your tasks:</h4>
        <div class="todo-list">
            <div class="loading"></div>
        </div>
        </>
    )
}