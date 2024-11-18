import React from 'react';

const Contacts = () => {
  return (
    <div
      name="Contact"
      className="w-full h-screen bg-gradient-to-b from-gray-800 via-slate-500 to-pink-200 p-4 text-pink-500 italic"
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        {/* Header Section */}
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold italic text-pink-500 inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 text-lg sm:text-xl text-white text-center font-bold">
            Submit the form below to get in touch with me
          </p>
        </div>

        {/* Form Section */}
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/pbqgjpdb"
            method="POST"
            className="flex flex-col w-full sm:w-3/4 md:w-1/2 space-y-4"
          >
            {/* Name Input */}
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 bg-transparent border-2 rounded-md text-black placeholder-black focus:outline-none"
            />

            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-3 bg-transparent border-2 rounded-md text-black placeholder-black focus:outline-none"
            />

            {/* Message Textarea */}
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="6"
              className="p-3 bg-transparent border-2 rounded-md text-black placeholder-black focus:outline-none"
            ></textarea>

            {/* Submit Button */}
            <button className="text-black bg-gradient-to-r from-pink-600 to-pink-100 px-6 py-3 mt-6 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
