import "../App.css";
import { Link } from "react-router-dom";
import BooksShelf from "./BooksShelf";

const Home = ({ books, updateBook }) => {
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {/* <CurrentlyReading books={books} updateBook={updateBook} />

          <WantToRead books={books} updateBook={updateBook} />

          <Read books={books} updateBook={updateBook}/> */}
            <BooksShelf
              updateBook={updateBook}
              books={books.filter((book) => book.shelf === "wantToRead")}
              title="Want to Read"
            />
            <BooksShelf
              updateBook={updateBook}
              books={books.filter((book) => book.shelf === "currentlyReading")}
              title="currently Reading"
            />
            <BooksShelf
              updateBook={updateBook}
              books={books.filter((book) => book.shelf === "read")}
              title="Read"
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" />
        </div>
      </div>
    </div>
  );
};

export default Home;
