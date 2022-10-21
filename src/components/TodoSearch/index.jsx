import "./styles.css";
import { UilSearch } from '@iconscout/react-unicons';

export const TodoSearch = ({ text }) => {

    const handleSearch = (e) => {
        const searchValue = e.target.value;
        console.log(searchValue);
    }

    return(
        <div class="search-container">
            <input type="search" onChange={handleSearch}/>
            <UilSearch/>
        </div>
    )
}