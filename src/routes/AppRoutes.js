import { Routes, Route } from "react-router-dom";
import BookDetails from "../components/BookDetails";
import Home from "../components/Home";
import Search from "../components/Search";

const AppRoutes = ({books, addNewBookToShelf, updateBook }) => {


  return (
    <Routes>
      <Route
        path="/"
        exact
        element={<Home books={books} updateBook={updateBook} />}
      />
      <Route
        path="/search"
        exact
        element={<Search books={books} addNewBookToShelf={addNewBookToShelf} updateBook={updateBook} />}
      />
      <Route
        path="/book/:id"
        exact
        element={<BookDetails books={books} updateBook={updateBook} />}
      />
    </Routes>
  );
};

export default AppRoutes;
