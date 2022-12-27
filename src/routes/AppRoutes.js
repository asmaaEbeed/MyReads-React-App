import { Routes, Route } from "react-router-dom";
import BookDetails from "../pages/BookDetails";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Search from "../pages/Search";

const AppRoutes = ({books, addNewBookToShelf, updateBook, error, loading }) => {


  return (
    <Routes>
      <Route
        path="/"
        exact
        element={<Home books={books} updateBook={updateBook} error={error} loading={loading} />}
      />
      <Route
        path="/search"
        exact
        element={<Search books={books} addNewBookToShelf={addNewBookToShelf} updateBook={updateBook} />}
      />
      <Route
        path="/book/:id"
        exact
        element={<BookDetails  addNewBookToShelf={addNewBookToShelf} updateBook={updateBook} />}
      />
      <Route path='*' exact={true} element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
