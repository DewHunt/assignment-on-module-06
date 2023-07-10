import { useState } from "react";

const Contents = () => {
  const [message, setMessage] = useState("");

  function showMessage(e) {
    e.preventDefault();
    const messageText = e.target[0].value;
    setMessage(messageText);
  }

  return (
    <div>
      <div className="p-10 border-2 border-solid border-indigo-500">
        <form onSubmit={showMessage}>
          <label
            htmlFor="message"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."></textarea>
          <div className="mt-3 text-end">
            <button
              type="submit"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
                Show Message
              </span>
            </button>
          </div>
        </form>
        <div className="mt-5 h-72 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 overflow-auto text-justify">
          {message}
        </div>
      </div>
    </div>
  );
};

export default Contents;
