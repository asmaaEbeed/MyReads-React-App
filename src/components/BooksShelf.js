import React from "react";
import { Link } from "react-router-dom";
import AddToShelf from "./AddToShelf";
import ShelfChange from "./ShelfChange";

const BooksShelf = ({
  allBooks,
  books,
  updateBook,
  title,
  addNewBookToShelf,
  error,
  isSearching,
  search,
  bookShelfName,
}) => {

  
  let updatingBook = {}
  const dragStarted = (e, id, book) => {
    e.dataTransfer.setData("bookId", id);
  };

  const onDraggingOver = (e) => {
    e.preventDefault();
  };
  const dragDropped = (e, bookShelfName) => {
    e.preventDefault();
    const updatingBookId = e.dataTransfer.getData("bookId");
    for(let i = 0; i < allBooks.length; i++){
      if(allBooks[i].id === updatingBookId) {
        updatingBook = allBooks[i];
      }
    }
    updateBook(updatingBook, bookShelfName)
  };
  return (
    <div className="bookshelf">
      {!search && <h2 className="bookshelf-title">{title}</h2>}
      <div className="bookshelf-books">
        {error ? (
          <div className="error">
            Oops! <br /> Can't fetch book data :({" "}
          </div>
        ) : (
          <ol
            className="books-grid"
            droppable="true"
            onDragOver={(e) => {
              !search && onDraggingOver(e);
            }}
            onDrop={(e) => {
              !search && dragDropped(e, bookShelfName);
            }}
          >
            {isSearching && <div>Searching ...</div>}
            {books &&
              (books.length !== 0 ? (
                books.map((book) => (
                  <li
                  style={{cursor: 'grabbing'}}
                    key={book.id}
                    draggable
                    onDragStart={(e) => {
                      !search && dragStarted(e, book.id, book);
                    }}
                  >
                    <div className="book">
                      <div className="book-top">
                        <div className="check-book">
                          {(book.shelf === "read" ||
                            book.shelf === "wantToRead" ||
                            book.shelf === "currentlyReading") && (
                            <div className="backcolor-icon">
                              <img
                                src={
                                  require("../images/check-mark.svg").default
                                }
                                alt="exit-book"
                              />
                            </div>
                          )}
                        </div>
                        <Link to={`/book/${book.id}`}>
                          <div
                            className="book-cover"
                            style={{
                              
                              backgroundSize: "cover",
                              backgroundImage: `url(${
                                book.imageLinks
                                  ? book.imageLinks.thumbnail
                                  : "../images/default-book-ico.png"
                              })`,
                            }}
                          ></div>
                        </Link>
                        {book.shelf === "" ? (
                          <AddToShelf
                            book={book}
                            addNewBookToShelf={addNewBookToShelf}
                          />
                        ) : (
                          <ShelfChange book={book} updateBook={updateBook} />
                        )}
                      </div>
                    </div>
                    <div className="book-details">
                      <h3>Title: </h3>
                      {book.title}
                    </div>
                  </li>
                ))
              ) : !search ? (
                <div className="empty-shelf">No books in this shelf.</div>
              ) : (
                !isSearching && (
                  <div className="empty-shelf">Enter your search keywords.</div>
                )
              ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default BooksShelf;
