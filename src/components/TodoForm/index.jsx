import "./styles.css";

export const TodoForm = () => {

    const onCancel = () => {
        console.log("on cancel");
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("on submit");
    }

    const onChange = (e) => {
        console.log("on change");
    }

    return(
        <form className="add-todo-form" onSubmit={onSubmit}>
            <label><b>ADD TODO</b></label>
            {/* <hr></hr> */}
            <textarea
                className="add-todo-text"
                onChange={onChange}
                placeholder="Do homework, programming, study..."
            />
            <div className="buttons">
                <button type="button" class="button button-orange" onClick={onCancel}>
                    Cancel
                </button>
                <button type="submit" class="button">
                    Add
                </button>
            </div>
        </form>
    )
}