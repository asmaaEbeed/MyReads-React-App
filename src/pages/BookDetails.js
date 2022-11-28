import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import ShelfChange from "../components/ShelfChange";
import AddToShelf from "../components/AddToShelf";
import { Link } from "react-router-dom";

const BookDetails = ({ updateBook, addNewBookToShelf }) => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState({});

  useEffect(() => {
    BooksAPI.get(id).then((res) => {
      setBookDetails(res);
    });
  }, [id]);
  return (
    <div style={{
      borderTop: '8px solid #2e7c31'
  }}>
      <div className="list-books-title">
        <img src={require("../images/book.svg").default} alt="page not found" />
        <h1>
          <Link className="normal-link" to={"/"}>
            <span>MY </span>READS
          </Link>
        </h1>
      </div>

      {bookDetails && Object.keys(bookDetails).length !== 0 && (
        <div className="flex flex-center mt-3">
          <div className="book-details-container">
            <div>
              <h2
                style={{ color: " #2e7c31", fontSize: "1.2rem" }}
                className="m3"
              >
                {bookDetails.title}
              </h2>
            </div>
            {bookDetails.shelf && bookDetails.shelf !== "none" && (
              <div style={{ marginBottom: "2%", fontStyle: "italic" }}>
                You {bookDetails.shelf} it.
              </div>
            )}

            <div className="book-details">
              {bookDetails.authors && (
                <div className="authors ">
                  <h3 style={{ fontSize: "16px" }}>Authors</h3>
                  {bookDetails.authors &&
                    bookDetails.authors.map((author, i) => (
                      <h4 key={i} style={{ fontSize: "14px", margin: "7px 0", fontWeight: "300" }}>
                        {" "}
                        - {author}
                      </h4>
                    ))}
                </div>
              )}
              {bookDetails.subtitle && (
                <div className="authors m3">
                  <h3 style={{ fontSize: "16px" }}>Subtitle</h3>
                  <h4 style={{ fontSize: "15px", margin: "7px 0" }}>
                    {bookDetails.subtitle}
                  </h4>
                </div>
              )}

              {bookDetails.description && (
                <div>
                  <div
                    style={{
                      textDecoration: "underline",
                      marginBottom: "20px",
                      fontWeight: "600",
                    }}
                  >
                    Description
                  </div>

                  <div style={{ textAlign: "justify" }}>
                    {bookDetails.description}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="book-img-details">
            <div className="book">
              <div className="book-top book-top-details">
              <div className="check-book">
                      {(bookDetails.shelf === "read" ||
                        bookDetails.shelf === "wantToRead" ||
                        bookDetails.shelf === "currentlyReading") && (
                        <div className="backcolor-icon">
                          <img
                            src={require("../images/check-mark.svg").default}
                            alt="exit-book"
                          />
                        </div>
                      )}
                    </div>
                <div
                  className="book-cover"
                  style={{
                    width: "170px",
                    height: "226px",
                    backgroundSize: "cover",
                    backgroundImage: `url(${
                      bookDetails.imageLinks
                        ? bookDetails.imageLinks.thumbnail
                        : "../images/default-book-ico.png"
                    })`,
                  }}
                ></div>

                {bookDetails.shelf === "none" || bookDetails.shelf === "" ? (
                  <AddToShelf
                    book={bookDetails}
                    addNewBookToShelf={addNewBookToShelf}
                  />
                ) : (
                  <ShelfChange book={bookDetails} updateBook={updateBook} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
