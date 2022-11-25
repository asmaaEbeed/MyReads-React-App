import AppRoutes from "./routes/AppRoutes";
import * as BooksAPI from "./BooksAPI";
import { useEffect, useState } from "react";


function App() {
  const [books, setBooks] = useState([]);

  // use forceRender state only to force rerender because react detect books change as a small change that doesn't need to rerender
  const [forceRender, setForceRender] = useState(true);

  const updateBook = (updatedBook, newShelf) => {
    books.map(( book) => book.id === updatedBook.id && (book.shelf = newShelf));
    setBooks(books);
    setForceRender(!forceRender);
    BooksAPI.update(updatedBook, newShelf);
  };

  const addNewBookToShelf = (newBook) => {
    const isExist = checkBookExisting(newBook);
    console.log("isExist:", isExist);
    isExist &&
      books.map(
        (book) => ((book.id === newBook.id) && (book.shelf !== newBook.shelf && (book.shelf = newBook.shelf)))
      );
      if(!isExist) {
        const newBookList = books.concat(newBook);
        setBooks(newBookList);
      };
  };

  const checkBookExisting = (newBook) => {

    let exist =  books.filter(book => (book.id === newBook.id));
    if(exist.length>0) {return true}
    else { return false }
  };

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  return (
    <AppRoutes books={books} addNewBookToShelf={addNewBookToShelf} updateBook={updateBook} />

  );
}

export default App;
