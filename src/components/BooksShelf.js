import React from 'react'
import { Link } from 'react-router-dom'
import ShelfChange from './ShelfChange'

const BooksShelf = ({ books, updateBook, title }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(
            (book) =>
            
            <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <Link to={`/book/${book.id}`} >
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
                        }}
                      ></div>
                        
                      </Link>
                      <ShelfChange book={book} updateBook={updateBook} />
                    </div>
                  </div>
                </li>
              
          )}
        </ol>
      </div>
    </div>
  )
}

export default BooksShelf
