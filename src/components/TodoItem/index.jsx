import "./styles.css";


export const TodoItem = ({ text, completed }) => {
    return(
        <div className="task">
            {completed}
            <p>{text}</p>
        </div>
    )
}