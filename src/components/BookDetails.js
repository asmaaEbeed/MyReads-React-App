import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import ShelfChange from "./ShelfChange";

const BookDetails = ({ updateBook }) => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState({});

  useEffect(() => {
    BooksAPI.get(id).then((BookDetails) => {
      setBookDetails(BookDetails);
    });
  }, [id]);
  return (
    <div>
      <div className="list-books-title">
        <h1>My Reads</h1>
      </div>

      <div className="center m3">
          <div>
            <h2 style={{ color: " #2e7c31" }} className="m3">
              {bookDetails.title}
            </h2>
          </div>
          {bookDetails.shelf && <div style={{marginBottom: '2%', fontStyle: 'italic'}}>You {bookDetails.shelf} it.</div>}
        <div className="book center">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${
                  bookDetails.imageLinks
                    ? bookDetails.imageLinks.thumbnail
                    : "../images/default-book-ico.png"
                })`,
              }}
            ></div>
            <ShelfChange book={bookDetails} updateBook={updateBook} />
          </div>
        </div>

        <div className="book-details">
          {bookDetails.authors && (
            <div className="authors m3">
              <div
                style={{
                  textDecoration: "underline",
                  marginBottom: "20px",
                  fontWeight: "600",
                }}
              >
                Authors
              </div>
              {bookDetails.authors &&
                bookDetails.authors.map((author, i) => (
                  <span key={i}>{author}</span>
                ))}
            </div>
          )}
          {bookDetails.subtitle && (
            <div className="authors m3">
              <div
                style={{
                  textDecoration: "underline",
                  marginBottom: "20px",
                  fontWeight: "600",
                }}
              >
                Subtitle
              </div>
              {bookDetails.subtitle}
            </div>
          )}

          {bookDetails.description && (
            <div className="description">
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
    </div>
  );
};

export default BookDetails;
