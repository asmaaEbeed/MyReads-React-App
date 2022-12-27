import React, { useEffect, useState, useRef } from "react";
import Notifications from "./Notifications";
import NotificationSound from '../sounds/notification-tone.mp3'

const ContactUs = () => {

  const audioPlayer = useRef(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState("");

  let notification;

  useEffect(() => {
    if (requestStatus === "success") {
      const timer = setTimeout(() => {
        setRequestStatus("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  function sendMessageHandler(event) {
    event.preventDefault();
    setRequestStatus("success");
    playAudio();
    setEmail('');
    setFullName('');
    setMessage('');
  }
  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Your message sent successfully!",
    };
  }
  function playAudio() {
    audioPlayer.current.play();
  }
  return (
    <div className="center-content block py-24 lg:pt-0 bg-blue-dark pt-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center ">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full md:mt-9 mt-5 mb-6 shadow-lg border-green-500 border-2 bg-black bg-opacity-25">
              <div className="flex-auto p-5 lg:p-10">
                <h4 className="text-2xl font-semibold text-white">
                  Want to contact us?
                </h4>
                <p className="leading-relaxed mt-1 mb-4 text-blueGray-500 text-white">
                  Complete this form and we will get back to you in 24 hours.
                </p>

                <form onSubmit={sendMessageHandler}>
                  <div className="relative w-full mb-3 mt-8 text-left">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2 text-white"
                      htmlFor="full-name"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3 text-left">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2 text-white"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3 text-left">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2 text-white"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      rows="4"
                      cols="80"
                      required
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Type a message..."
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button className="bg-green-600 hover:bg-green-800 text-white active:bg-green-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                      Send Message
                    </button>
                    <audio ref={audioPlayer} src={NotificationSound} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      { notification && (
        <Notifications
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </div>
  );
};

export default ContactUs;
