import React from "react";
import PropTypes from "prop-types";

const AddToShelf = ({book, addNewBookToShelf}) => {

  const addBookToShelf = (e) => {
    book.shelf = e.target.value;
    addNewBookToShelf(book)
  }


  return (
    <div className="book-shelf-changer">
      <select defaultValue={book.shelf} onChange={e => addBookToShelf(e)} >
        <option value="" disabled>
          Add to ..
        </option>
        <option value="wantToRead">Want to Read</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="read">Read</option>
      </select>
    </div>
  );
};

AddToShelf.propTypes = {
  book: PropTypes.object.isRequired,
  addNewBookToShelf: PropTypes.func.isRequired
};

export default AddToShelf;


