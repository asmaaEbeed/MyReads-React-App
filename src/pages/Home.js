import "../App.css";
import BooksShelf from "../components/BooksShelf";
import HomeBanner from "../components/HomeBanner";
import ContactUs from "../components/ContactUs";
import KeepInTouch from "../components/KeepInTouch";

const Home = ({ books, updateBook, error, loading}) => {
  return (
    <div
      className="app"
    >
      <HomeBanner />
      <div className="list-books">
        <div className="list-books-content pb-4">
          {error ? (
            <div className="error">
              Oops! <br /> Can't fetch book data :({" "}
            </div>
          ) : (
            <div>
              {console.log(
                books.filter((book) => book.shelf === "wantToRead").length
              )}

              <BooksShelf
                allBooks={books}
                updateBook={updateBook}
                books={books.filter((book) => book.shelf === "wantToRead")}
                title="Want to Read"
                bookShelfName="wantToRead"
                id="wantToRead"
                loading={loading}
              />
              <BooksShelf
                allBooks={books}
                updateBook={updateBook}
                books={books.filter(
                  (book) => book.shelf === "currentlyReading"
                )}
                title="currently Reading"
                bookShelfName="currentlyReading"
                loading={loading}
              />
              <BooksShelf
                allBooks={books}
                updateBook={updateBook}
                books={books.filter((book) => book.shelf === "read")}
                title="Read"
                bookShelfName="read" id="read"
                loading={loading}
              />
            </div>
          )}
        </div>
        
      </div>
      <ContactUs />
      <KeepInTouch />
    </div>
  );
};

export default Home;
