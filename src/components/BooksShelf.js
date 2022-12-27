import React from "react";
import { Link, useLocation } from "react-router-dom";
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
  loading
}) => {
  // var dragStartedSelector = document.querySelector('.drag-started');

  // if(dragStartedSelector) {
  //   dragStartedSelector.forEach((draggable) => {
  //     draggable.addEventListener("touchstart", () => {
  //       console.log("drag started")
  //     });

  //   });

  //   dragStartedSelector.addEventListener('touchstart', function(){
  //     console.log('btn touched');
  //   })
  // }
  const location = useLocation();

  const dragTitle =
    location.pathname === "/" && "DRAG & DROP to change book shelf.";
  const dragCursor = location.pathname === "/" && "move";

  let updatingBook = {};
  const dragStarted = (e, id, book) => {
    e.dataTransfer.setData("bookId", id);
  };

  const onDraggingOver = (e) => {
    e.preventDefault();
  };
  const dragDropped = (e, bookShelfName) => {
    e.preventDefault();
    const updatingBookId = e.dataTransfer.getData("bookId");
    for (let i = 0; i < allBooks.length; i++) {
      if (allBooks[i].id === updatingBookId) {
        updatingBook = allBooks[i];
      }
    }
    updateBook(updatingBook, bookShelfName);
  };
  return (
    <div
      className={`center-content md:py-8 md:px-7 py-5  px-5  ${
        bookShelfName === "currentlyReading" ? "bg-blue-dark" : "bg-white relative"
      }`}
    >
      {!search && (
        <h2
          className={`bookshelf-title md:mb-10 mb-7 md:text-2xl text-lg font-semibold ${
            bookShelfName === "currentlyReading" ? "text-white" : "text-blue-dark"
          }`}
          id={bookShelfName}
        >
          {title}
        </h2>
      )}
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
            {loading && <div>Loading...</div>}
            {books &&
              (books.length !== 0 ? (
                books.map((book) => (
                  <li
                    className={`drag-started border-2  py-2 md:px-5 px-2 ${bookShelfName === "currentlyReading" ? "border-green-500 bg-black bg-opacity-25" : "border-blue-dark"}`}
                    style={{ cursor: dragCursor }}
                    title={dragTitle}
                    key={book.id}
                    draggable
                    onDragStart={(e) => {
                      !search && dragStarted(e, book.id, book);
                    }}
                  >
                    <div className="book -mt-8 mx-auto">
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
                            title="Go to book details"
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
                    <div className="book-details md:text-sm text-xs">
                      <h3 className={`${bookShelfName === "currentlyReading" ? "text-gray-400" : ""}`}>Title: </h3>
                      <span className={`tracking-wide hover:font-semibold transition ease-in-out duration-300 py-2 cursor-default ${bookShelfName === "currentlyReading" ? "text-gray-200" : ""}`}>
                        {book.title}
                      </span>
                    </div>
                  </li>
                ))
              ) : (!search && !loading) ? (
                <div className="empty-shelf">No books in this shelf.</div>
              ) : (
                (!isSearching && !loading) && (
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
