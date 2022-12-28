import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import ShelfChange from "../components/ShelfChange";
import AddToShelf from "../components/AddToShelf";

const BookDetails = ({ updateBook, addNewBookToShelf }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState({});

  useEffect(() => {
    const getBook = async () => {
      const fetchedBook = await BooksAPI.get(id);
      if (fetchedBook === null) {
        navigate("/not-found");
      } else {
        setBookDetails(fetchedBook);
      }
    };
    getBook();

    // BooksAPI.get(id).then((res) => {
    //   setBookDetails(res);
    // });
  }, [id, navigate]);
  return (
    <div>
      {bookDetails && Object.keys(bookDetails).length !== 0 && (
        <div className="lg:pt-11 pt-11 justify-center pb-9">
          <div className="center-content relative pb-1 bg-blue-dark">
            <div className="mx-auto flex md:flex-wrap flex-wrap-reverse justify-between">
              <div className="w-full  justify-between md:w-1/2 md:justify-start mb-4 text-white xl:px-24 xl:py-8 pt-10 lg:p-16 md:p-5 p-6 md:text-left text-center leading-max-4 tracking-wider">
                <div>
                  <h2 className="text-2xl font-semibold text-green-600 m3">
                    {bookDetails.title}
                  </h2>
                </div>

                <hr className="border-gray-600" />
                <div className="book-details">
                  {bookDetails.authors && (
                    <div className="authors ">
                      <h3 className="underline mb-5 font-semibold text-lg text-neutral-500">
                        {bookDetails.authors.length > 1 ? "Authors" : "Author"}
                      </h3>
                      {bookDetails.authors &&
                        bookDetails.authors.map((author, i) => (
                          <h4 key={i} className="text-base my-2 text-white">
                            {" "}
                            - {author}
                          </h4>
                        ))}
                    </div>
                  )}
                  <hr className="border-gray-600" />
                  {bookDetails.subtitle && (
                    <div className="authors m3">
                      <h3 className="underline mb-5 font-semibold text-lg text-neutral-500">
                        Subtitle
                      </h3>
                      <h4 className="text-base my-2 text-white">
                        {bookDetails.subtitle}
                      </h4>
                    </div>
                  )}
                </div>
              </div>

              <div className="book-img-details w-full text-center justify-around md:w-1/2 mb-4 md:pt-13 pt-10">
                <div className="book h-fit m-auto border-2  py-4 md:px-5 px-2 border-green-500 bg-black bg-opacity-25">
                  <div className="book-top -mt-8 mx-auto book-top-details">
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
                        backgroundSize: "cover",
                        backgroundImage: `url(${
                          bookDetails.imageLinks
                            ? bookDetails.imageLinks.thumbnail
                            : "../images/default-book-ico.png"
                        })`,
                      }}
                    ></div>

                    {bookDetails.shelf === "none" ||
                    bookDetails.shelf === "" ? (
                      <AddToShelf
                        book={bookDetails}
                        addNewBookToShelf={addNewBookToShelf}
                      />
                    ) : (
                      <ShelfChange book={bookDetails} updateBook={updateBook} />
                    )}
                  </div>
                </div>
                {bookDetails.shelf && bookDetails.shelf !== "none" && (
                  <div className="my-3 italic text-gray-400">
                    You {bookDetails.shelf} it.
                  </div>
                )}
              </div>
            </div>
            {bookDetails.description && (
              <div>
                <h3 className="underline mb-5 font-semibold text-lg text-neutral-500">
                  Description
                </h3>

                <div className="text-justify md:text-lg text-base my-2 text-white lg:mx-28 md:mx-20 mx-10 lg:mt-9 md:mt-7 mt-5 lg:mb-12 md:mb-11 mb-7">
                  {bookDetails.description}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
