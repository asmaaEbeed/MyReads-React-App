import React from 'react'

const Footer = () => {
  return (
    <div className='absolute w-full bottom-0'>
      <div className="center-content flex flex-wrap items-center md:justify-between justify-center bg-blue-dark">
        <div className="w-full px-4 mx-auto text-center text-white">
          <div className="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © {new Date().getFullYear()} React by{" "}
            <a
              href="https://www.linkedin.com/in/asmaa-ebeed/"
              className="text-blueGray-500 hover:text-blueGray-800"
            >
              AsmaaEbeed
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
