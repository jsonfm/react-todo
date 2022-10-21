import "./styles.css";


export const TodoItem = ({ text, completed }) => {
    return(
        <div class="task">
            {completed}
            <p>{text}</p>
        </div>
    )
}