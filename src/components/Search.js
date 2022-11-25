import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as BooksAPI from "../BooksAPI";
import AddToShelf from "./AddToShelf";
import ShelfChange from "./ShelfChange";

const Search = ({ books, addNewBookToShelf, updateBook }) => {
  const [query, setQuery] = useState("");
  const [allBooks, setAllBooks] = useState([]);


  const updateQuery = (query) => {
    setQuery(query.trim());
    (query !== '' ? searchRelatedBooks(query) : setAllBooks([]))
    
  };
  const searchRelatedBooks = (query) => {
    BooksAPI.search(query, 40).then((searchResultBooks) => {
      (!Array.isArray(searchResultBooks) && (searchResultBooks=[]));


      if(searchResultBooks.length === 0) {
        setAllBooks([])
      } else {
        searchResultBooks.map(searchResultBook => (searchResultBook.shelf = ''));

           for(let i=0; i < searchResultBooks.length; i++) {
            for(let j=0; j < books.length; j++) {
              if(searchResultBooks[i].id === books[j].id) {
                searchResultBooks[i].shelf = books[j].shelf;
              }
            }
          }
        setAllBooks(searchResultBooks)
      }
    });
  };

  return (
    <div className="search-books">
      {console.log(allBooks)}
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {allBooks.length === 0 && <li>No Books found</li>}
          {allBooks.length > 0 &&
            allBooks.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.thumbnail})`,
                      }}
                    ></div>

                        {book.shelf === '' ? <AddToShelf book={book} addNewBookToShelf={addNewBookToShelf} key={book.name}/> : <ShelfChange book={book} updateBook={updateBook}/>}
                  </div>
                </div>
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
