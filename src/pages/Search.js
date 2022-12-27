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
        BooksAPI.search(debouncedSearchTerm, 40)
          .then((results) => {
            setIsSearching(false);
            searchRelatedBooks(results);
          })
          .catch((err) => {
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
    <div className="search-books pt-10">
      <div className="search-books-bar center-content bg-blue-dark">
        <div className="w-full lg:w-6/12 px-4 m-auto">
        <div className="relative flex flex-col min-w-0 break-words w-full md:mt-6 mt-4 mb-6 shadow-lg border-green-500 border-2 bg-black bg-opacity-25 p-1 lg:p-3">
         <p className="leading-relaxed mt-1 text-blueGray-500 text-white">Enter keywords of book you need to add to your shelves.</p>
         <div className="flex">

          <Link className="close-search rounded border-green-600 border" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper px-2">
            <input
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              type="text"
              placeholder="Search by title, author, or ISBN"
              onChange={(event) => updateQuery(event.target.value)}
            />
          </div>
         </div>
        </div>
        </div>
      </div>
      <div className="search-books-results">
        <BooksShelf
          addNewBookToShelf={addNewBookToShelf}
          error={error}
          isSearching={isSearching}
          books={allBooks}
          updateBook={updateBook}
          search={search}
        />
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
