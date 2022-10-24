import { useState, useContext } from "react";
import { TodosContext } from "@/store/context";

import "./styles.css";

export const TodoForm = () => {

    const [value, setValue] = useState('');
    const { onAddTodo, setOpenModal } = useContext(TodosContext);

    const onCancel = () => {
        setValue('');
        setOpenModal(false);
        console.log("on cancel");
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onAddTodo(value);
        setOpenModal(false);
    }

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return(
        <form className="add-todo-form" onSubmit={onSubmit}>
            <label><b>ADD TODO</b></label>
            {/* <hr></hr> */}
            <textarea
                defaultValue={value}
                onChange={onChange}
                className="add-todo-text"
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