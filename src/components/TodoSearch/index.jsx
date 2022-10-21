import "./styles.css";
import { UilSearch } from '@iconscout/react-unicons';

export const TodoSearch = ({ text, onSearch }) => {
    return(
        <div className="search-container">
            <input type="search" onChange={onSearch}/>
            <UilSearch/>
        </div>
    )
}