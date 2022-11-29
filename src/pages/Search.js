import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as BooksAPI from "../BooksAPI";
import BooksShelf from "../components/BooksShelf";

const Search = ({ books, addNewBookToShelf, updateBook }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [allBooks, setAllBooks] = useState([]);
  const search = true;

  const debouncedSearchTerm = useDebounce(query, 500);

  const searchRelatedBooks = React.useCallback(
    (results) => {
      !Array.isArray(results) && (results = []);

      if (results.length === 0) {
        setAllBooks([]);
      } else {
        results.map((searchResultBook) => (searchResultBook.shelf = ""));

        for (let i = 0; i < results.length; i++) {
          for (let j = 0; j < books.length; j++) {
            if (results[i].id === books[j].id) {
              results[i].shelf = books[j].shelf;
            }
          }
        }
        setAllBooks(results);
      }
    },
    [books]
  );

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        BooksAPI.search(debouncedSearchTerm, 40).then((results) => {
          setIsSearching(false);
          searchRelatedBooks(results);
        }).catch(err => {
          console.log(err);
          setError(true);
        });
      } else {
        setAllBooks([]);
        setIsSearching(false);
      }
    },
    [debouncedSearchTerm, searchRelatedBooks] // Only call effect if debounced search term changes
  );

  const updateQuery = (query) => {
    setQuery(query.replace(/\s+/g, " ").trim());
  };

  return (
    
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <BooksShelf addNewBookToShelf={addNewBookToShelf} error={error} isSearching={isSearching} books={allBooks} updateBook={updateBook} search={search} />
        
      </div>
    </div>
  );
};

export default Search;

// Hook
function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}
