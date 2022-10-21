import "./styles.css";
import { UilCheckSquare } from '@iconscout/react-unicons';
import { UilSquareFull } from '@iconscout/react-unicons';
import { UilTrash } from '@iconscout/react-unicons';

export const TodoItem = ({ text, completed, onComplete, onDelete }) => {

    return(
        <div className={`task ${completed && ' completed'}`}>
            <div className="check" onClick={() => onComplete(text)}>
                {completed ? <UilCheckSquare/> : <UilSquareFull/>}
            </div>
            <p>{text}</p>
            <div className="trash" onClick={() => onDelete(text)}>
                <UilTrash/>
            </div>
        </div>
    )
}