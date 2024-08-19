import { useState } from 'react';
import styles from './SearchBar.module.css';
import { toast } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a search term');
      return;
    }
    onSubmit(query);
  };

  return (
    <header className={styles.SearchBar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <input
          className={styles.SearchFormInput}
          type="text"
          value={query}
          onChange={handleInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={styles.SearchFormButton}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
