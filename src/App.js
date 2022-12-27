import AppRoutes from "./routes/AppRoutes";
import * as BooksAPI from "./BooksAPI";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import OpenSearchBook from "./components/OpenSearchBook";
import Footer from "./components/Footer";

function App() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // use forceRender state only to force rerender because react detect books change as a small change that doesn't need to rerender
  const [forceRender, setForceRender] = useState(true);

  const updateBook = (updatedBook, newShelf) => {
    books.map((book) => book.id === updatedBook.id && (book.shelf = newShelf));
    setBooks(books);
    setForceRender(!forceRender);
    BooksAPI.update(updatedBook, newShelf)
      .then((res) => {
        res.error && setError(true);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  const addNewBookToShelf = (newBook) => {
    const isExist = checkBookExisting(newBook);
    console.log("isExist:", isExist);
    isExist &&
      books.map(
        (book) =>
          book.id === newBook.id &&
          book.shelf !== newBook.shelf &&
          (book.shelf = newBook.shelf)
      );
    if (!isExist) {
      const newBookList = books.concat(newBook);
      setBooks(newBookList);
      BooksAPI.update(newBook, newBook.shelf)
        .then((res) => {
          res.error && setError(true);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
        });
    }
  };

  const checkBookExisting = (newBook) => {
    let exist = books.filter((book) => book.id === newBook.id);
    if (exist.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    setLoading(true);
    BooksAPI.getAll()
      .then((books) => {
        setLoading(false);
        setBooks(books);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <AppRoutes
        error={error}
        books={books}
        addNewBookToShelf={addNewBookToShelf}
        updateBook={updateBook}
        loading={loading}
      />
      <OpenSearchBook />
      <Footer />
      <div id="notifications"></div>
    </div>
  );
}

export default App;
