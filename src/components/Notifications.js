import ReactDom from 'react-dom';


const Notifications = (props) => {
    const { title, message, status } = props;
    //  className={`center-content md:py-8 md:px-7 py-5  px-5  ${
    //     bookShelfName === "currentlyReading" ? "bg-blue-dark" : ""
    //   }`}
    
    return ReactDom.createPortal ((
        <div className={`flex justify-between items-center text-gray-200 bg-gray-700 p-5 fixed shadow shadow-zinc-600 h-16 right-0 top-11 rounded-tl-lg rounded-bl-lg w-96 transition-all md:py-8 md:px-7 py-5 px-5 ${
            status === "success" ? "bg-green-400 text-gray-900" : ""
          }`}>
          <h2>{title}</h2>
          <p>{message}</p>
        </div>
      ), document.getElementById('notifications'))
      ;
}

export default Notifications
