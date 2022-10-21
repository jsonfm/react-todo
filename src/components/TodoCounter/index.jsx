import "./styles.css";

export const TodoCounter = ({ todos=[] }={}) => {
    const total = todos.length || 0;
    const count = todos.reduce((acc, todo) => todo.completed ? acc + 1 : acc, 0) || 0;
    return(
        <h3 className="text-center">
            Completed <strong>{count}</strong> of <strong>{total}</strong>
        </h3>
    )
}