import React from "react";
import PropTypes from "prop-types";


const ShelfChange = ({book, updateBook}) => {

  const updateBookShelf = (e) => {
    updateBook(book, e.target.value)
  }
  return (
    <div className="book-shelf-changer">
      <select defaultValue={book.shelf} onChange={e => updateBookShelf(e)} >
        <option value="" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

ShelfChange.propTypes = {
  book: PropTypes.object.isRequired,
  updateBook: PropTypes.func.isRequired
};

export default ShelfChange;
