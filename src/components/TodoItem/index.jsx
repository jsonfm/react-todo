import "./styles.css";
import { UilCheckSquare } from '@iconscout/react-unicons';
import { UilSquareFull } from '@iconscout/react-unicons';
import { UilTrash } from '@iconscout/react-unicons';

export const TodoItem = ({ text, completed }) => {

    return(
        <div className="task">
            <div className="check">
                {completed ? <UilCheckSquare/>: <UilSquareFull/>}
            </div>
            <p>{text}</p>
            <div className="trash">
                <UilTrash/>
            </div>
        </div>
    )
}