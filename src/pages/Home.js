import "../App.css";
import { Link } from "react-router-dom";
import BooksShelf from "../components/BooksShelf";

const Home = ({ books, updateBook, error }) => {
  return (
    <div className="app" style={{
      borderTop: '8px solid #2e7c31'}}>
      
      <div className="list-books">
        <div className="list-books-title">
          <img
            src={require("../images/book.svg").default}
            alt="page not found"
          />
          <h1><Link className = "normal-link" to={'/'}><span>MY </span>READS</Link></h1>
        </div>
        <div className="list-books-content">
        {error ? (<div className="error">Oops! <br/> Can't fetch book data :( </div>) : (
          <div>
            {console.log((books.filter((book) => book.shelf === "wantToRead").length))}
            
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
        )}
        </div>
        <div className="open-search">
          <Link to="/search" />
        </div>
      </div>
      
    </div>
  );
};

export default Home;
