import React, { useLayoutEffect, useRef, useState } from "react";

const HomeBanner = () => {
  const ref = useRef(null);

  const [starContainerWidth, setStarContainerWidth] = useState(0);
  const [starContainerHight, setStarContainerHight] = useState(0);
  
  useLayoutEffect(() => {
    const count = 50;
    const section = document.querySelector(".star-container");
    const stars = document.querySelectorAll(".star-container i");

    function removeOldStars() {
      for (let i = 0; i < stars.length; i++) {
        stars[i].remove();
      }
    }

    console.log(stars);

    function createStars() {
      removeOldStars();
    let i = 0;
    setStarContainerWidth(ref.current.offsetWidth);
    setStarContainerHight(ref.current.offsetHeight);
    // function updateSize() {
    //   setSize([starContainerWidth, starContainerHight]);
    // }

    while (i < count) {
      const star = document.createElement("i");
      const x = Math.floor(Math.random() * starContainerWidth);
      const y = Math.floor(Math.random() * starContainerHight);

      const size = Math.random() * 4;
      star.style.left = x + "px";
      star.style.top = y + "px";
      star.style.width = 1 + size + "px";
      star.style.height = 1 + size + "px";

      const duration = Math.random() * 2;

      star.style.animationDuration = 2 + duration + "s";
      star.style.animationDelay = 2 + duration + "s";

      section.insertBefore(star, section.firstChild);

      // section.appendChild(star);
      i++;
    }

  }
  createStars();
    // window.addEventListener("resize", updateSize);
    // updateSize();
  }, [starContainerHight, starContainerWidth]);

  return (
    <>
      {/* Remove class from next deiv min-h-screen-75 */}
      <div className="relative lg:pt-10 pt-10 flex content-center items-center justify-center ">
        <div className="container relative mx-auto  bg-blue-dark">
          <div
            ref={ref}
            className="mx-auto flex flex-wrap items-center justify-between star-container"
          >
            <div className="w-full relative justify-between md:w-1/2 lg:static lg:block lg:justify-start mb-4 text-white xl:p-24 pt-10 lg:p-16 text-4xl text-center leading-max-4 tracking-wider">
              <span className="lg:text-5xl text-3xl font-luminari block ">
                <img
                  src={require("../images/quote.png")}
                  className="inline-block w-8 lg:w-auto"
                  alt="reading at moon"
                  style={{ margin: "0 15px 29px" }}
                />
                BOOKS
              </span>
              <span className="lg:text-4xl mt-2 text-2xl font-luminari block">
                are a uniquely portable{" "}
              </span>
              <span className="lg:text-4xl  mt-2 text-2xl font-luminari block">
                Magic
              </span>
              <p className="text-base mt-5 text-gray-400">
                Arrange your reading
                <br /> by adding books to shleves
                <br /> easily
              </p>
              <button
                className="bg-green-600 hover:bg-green-800 text-white active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150 relative"
                type="button"
              >
                Learn More
              </button>
            </div>
            <div className="w-full relative flex justify-between md:w-1/2 lg:static lg:block lg:justify-start mb-4 lg:py-8 py-0 flex-row-reverse min-h-screen-20">
              <div className="relative" style={{ direction: "rtl" }}>
                <img
                  src={require("../images/moonreading.png")}
                  className="lg:w-auto w-3/4"
                  alt="reading at moon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
