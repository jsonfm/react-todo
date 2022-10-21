import "./styles.css";

export const TodoCounter = ({ todos }) => {
    const total = todos.length;
    const count = todos.reduce((acc, todo) => todo.completed ? acc + 1 : acc, 0);
    return(
        <h3 class="text-center">
            Completed <strong>{count}</strong> of <strong>{total}</strong>
        </h3>
    )
}