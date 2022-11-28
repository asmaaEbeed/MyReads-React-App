import React from "react";
import { Link } from "react-router-dom";
import ShelfChange from "./ShelfChange";

const BooksShelf = ({ books, updateBook, title }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books &&
            (books.length !== 0 ?
            books.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <Link to={`/book/${book.id}`}>
                      <div
                        className="book-cover"
                        style={{
                          width: "140px",
                          height: "193px",
                          backgroundSize: "cover",
                          backgroundImage: `url(${
                            book.imageLinks
                              ? book.imageLinks.thumbnail
                              : "../images/default-book-ico.png"
                          })`,
                        }}
                      ></div>
                    </Link>
                    <ShelfChange book={book} updateBook={updateBook} />
                  </div>
                </div>
                <div className="book-details">
                  <h3>Title: </h3>
                  {book.title}
                </div>
              </li>
            )) : <div className="empty-shelf">No books in this shelf.</div>
            )
            }
        </ol>
      </div>
    </div>
  );
};

export default BooksShelf;
