/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/fontawesome-free-solid";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {


  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 pt-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start mb-4">
            <Link
              className="font-bold inline-block mr-4 py-2 whitespace-nowrap uppercase text-xl leading-none pb-0"
              to="/"
            >
              <FontAwesomeIcon
                icon="fa-book-open"
                className="text-blue-dark inline-block mr-1"
              />
              <span className="text-blue-dark">MY </span>
              <span className="text-green-600"> READS</span>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-blue-dark fa fa-bars "></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center nav-bg lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto text-white">
              <li className="flex items-center ease-in duration-300 border-b border-blue-dark hover:border-gray-400" >
                <Link
                  className="lg:text-white lg:bg-blue-dark lg:rounded-t-md lg:hover:text-blueGray-200 lg:mr-1 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li
                className="flex items-center ease-in duration-300 border-b border-blue-dark hover:border-gray-400"
              >
                <HashLink
                  className="lg:text-white lg:bg-blue-dark lg:rounded-t-md lg:hover:text-blueGray-200 lg:mr-1 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" to="#wantToRead" smooth
                >
                  Want to Read
                </HashLink>
              </li>
              <li
                className="flex items-center ease-in duration-300 border-b border-blue-dark hover:border-gray-400"
              >
                <HashLink
                  className="lg:text-white lg:bg-blue-dark lg:rounded-t-md lg:hover:text-blueGray-200 lg:mr-1 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" to="#currentlyReading" smooth
                >
                  Currently Read
                </HashLink>
              </li>

              <li
                className="flex items-center ease-in duration-300 border-b border-blue-dark hover:border-gray-400"
              >
                <HashLink
                  className="lg:text-white lg:bg-blue-dark lg:rounded-t-md lg:hover:text-blueGray-200 lg:mr-1 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" to="#read" smooth
                
                >
                  Read
                </HashLink>
              </li>

              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
