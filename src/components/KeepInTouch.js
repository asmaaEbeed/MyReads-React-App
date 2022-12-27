import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


const KeepInTouch = () => {
  return (
    <div className="center-content mx-auto px-4">
      <div className="text-center pt-7 pb-12">
        <div className="w-full px-4">
          <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
          <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
            Find us on any of these platforms, we respond 1-2 business days.
          </h5>
          <div className="mt-6 lg:mb-0 mb-6">
            
            <a title='linkedin' 
              className="bg-white text-sky-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-2 border border-green-500 hover:shadow-slate-400 hover:shadow-md transition-all duration-150"
              type="button"
              target="_blank" href="https://www.linkedin.com/in/asmaa-ebeed/" rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={brands('linkedin-in')} />
            </a>
            <a title='github' 
              className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-2 border border-green-500 hover:shadow-slate-400 hover:shadow-md transition-all duration-150"
              type="button"
              target="_blank" href="https://github.com/asmaaEbeed" rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={brands('github')} />
            </a>
            <a title='twitter' 
              className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-2 border border-green-500 hover:shadow-slate-400 hover:shadow-md text-cyan-600 transition-all duration-150"
              type="button"
              target="_blank" href="https://twitter.com/AsmaaEbeed15" rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={brands('twitter')} />
            </a> 
            <a title='behance' 
              className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-2 border border-green-500 hover:shadow-slate-400 hover:shadow-md transition-all duration-150"
              type="button"
              target="_blank" href="https://www.behance.net/asmaaebeid" rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={brands('behance')} />
            </a>
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default KeepInTouch;
