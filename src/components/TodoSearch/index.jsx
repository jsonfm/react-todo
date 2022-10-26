import './styles.css';
import { UilSearch } from '@iconscout/react-unicons';

export const TodoSearch = ({ text, onSearch, loading }) => {
  return (
    <div className="search-container">
      <input type="search" onChange={onSearch} disabled={loading}/>
      <UilSearch />
    </div>
  );
};
