import React, { useState } from 'react';
import fruit from '../assets/fruit-store.png';
import travel from '../assets/travel.png';
import portfolio from '../assets/portfolio.png';
import brand from '../assets/brand.png';

const Projects = () => {
  // State to manage visibility of descriptions
  const [showDescription, setShowDescription] = useState({ travel: false, fruit: false, portfolio: false, brand: false });

  // Function to handle button clicks for demo
  const openDemo = (url) => {
    window.location.href = url; // Opens the URL in the same tab
  };

  // Function to toggle descriptions
  const toggleDescription = (project) => {
    setShowDescription((prevState) => ({
      ...prevState,
      [project]: !prevState[project], // Toggle visibility for the specific project
    }));
  };

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-gray-800 via-slate-500 items-center overflow-y-hidden to-pink-200
      w-full text-white min-h-screen"
    >
      <div className="flex justify-center">
        <h1 className="text-4xl italic border-b-4 border-gray-500 text-pink-500 font-bold mt-10 mb-8">
          My Projects
        </h1>
      </div>

      {/* Project Grid */}
      <div className="grid grid-rows-1 vmd:grid-rows-2 gap-8 px-4">
        {/* Travel Website */}
        <div className="flex flex-col items-center mt-5 mb-8">
          <img
            src={travel}
            alt="Travel Website"
            className="w-40 sm:w-60 md:w-72 h-auto shadow-lg rounded-md hover:scale-105 duration-500 shadow-teal-400"
          />
          <div className="mt-5 flex space-x-4">
            <button
              className="px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-100 text-black rounded hover:scale-105 duration-500"
              onClick={() => openDemo('https://sameenazubair.github.io/europe/')}
            >
              Demo
            </button>
            <button
              className="px-4 py-2 bg-gradient-to-r from-teal-300 to-white text-black rounded hover:scale-105 duration-500"
              onClick={() => toggleDescription('travel')}
            >
              {showDescription.travel ? 'Hide Description' : 'Description'}
            </button>
          </div>
          {showDescription.travel && (
            <p className="mt-4 text-center text-black bg-gradient-to-b from-gray-200 to-teal-300 p-4 rounded-md shadow-lg max-w-lg mx-auto">
              <strong>Travel Website</strong>: Built using React and Tailwind CSS, this website showcases beautiful
              places in Europe with features like a responsive design, a video background, a carousel for destinations, 
              and a review slider.
            </p>
          )}
        </div>

        {/* Fruit Store */}
        <div className="flex flex-col items-center mt-8">
          <img
            src={fruit}
            alt="Fruit Store"
            className="w-40 sm:w-60 md:w-72 h-auto shadow-lg rounded-md hover:scale-105 duration-500 shadow-yellow-500"
          />
          <div className="mt-5 flex space-x-4">
            <button
              className="px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-100 text-black rounded hover:scale-105 duration-500"
              onClick={() => openDemo('https://sameenazubair.github.io/fruits-store/')}
            >
              Demo
            </button>
            <button
              className="px-4 py-2 bg-gradient-to-r from-yellow-300 to-white text-black rounded hover:scale-105 
              duration-500"
              onClick={() => toggleDescription('fruit')}
            >
              {showDescription.fruit ? 'Hide Description' : 'Description'}
            </button>
          </div>
          {showDescription.fruit && (
            <p className="mt-4 text-center text-black bg-gradient-to-b from-gray-200 to-yellow-300 p-4 rounded-md shadow-lg max-w-lg mx-auto">
              <strong>Fruit Store</strong>: A dynamic e-commerce project built with React, Tailwind CSS, Framer Motion, and Redux Toolkit. It features a responsive UI, smooth animations for enhanced user experience, and state management for seamless cart functionality and product interactions.
            </p>
          )}
        </div>
        {/*  Portfolio Project */}
        <div className="flex flex-col items-center mt-8">
          <img
            src={portfolio}
            alt="My Portfolio Website"
            className="w-40 sm:w-60 md:w-72 h-auto shadow-lg rounded-md hover:scale-105 duration-500 shadow-pink-500"
          />
          <div className="mt-5 flex space-x-4">
            <button
              className="px-4 py-2 bg-gradient-to-r  from-pink-500 to-pink-100 text-black rounded hover:scale-105 duration-500"
              onClick={() => openDemo('https://sameenazubair.github.io/portfolio/')}
            >
              Demo
            </button>
            <button
              className="px-4 py-2 bg-gradient-to-r from-gray-400 to-white text-black rounded hover:scale-105 
              duration-500"
              onClick={() => toggleDescription('portfolio')}
            >
              {showDescription.portfolio ? 'Hide Description' : 'Description'}
            </button>
          </div>
          {showDescription.portfolio && (
            <p className="mt-4 text-center text-black bg-gradient-to-b from-gray-200 to-pink-300 p-4 rounded-md shadow-lg max-w-lg mx-auto">
              <strong>My Portfolio Website</strong>: A personal portfolio website to showcase my projects and skills. 
              Designed and developed the website using React for a dynamic and interactive user experience.
              Utilized Tailwind CSS to create a responsive and visually appealing layout
            </p>
          )}
        </div>


        {/*  Brand Manager */}
        <div className="flex flex-col items-center mt-8">
          <img
            src={brand}
            alt="Brand Manager"
            className="w-40 sm:w-60 md:w-72 h-auto shadow-lg rounded-md hover:scale-105 duration-500 shadow-gray-500"
          />
          <div className="mt-5 flex space-x-4">
            <button
              className="px-4 py-2 bg-gradient-to-r  from-pink-500 to-pink-100 text-black rounded hover:scale-105 duration-500"
              onClick={() => openDemo('https://crud-git-main-sameena-zubairs-projects.vercel.app/')}
            >
              Demo
            </button>
            <button
              className="px-4 py-2 bg-gradient-to-r from-purple-400 to-white text-black rounded hover:scale-105 
              duration-500"
              onClick={() => toggleDescription('brand')}
            >
              {showDescription.brand ? 'Hide Description' : 'Description'}
            </button>
          </div>
          {showDescription.brand && (
            <p className="mt-4 text-center text-black bg-gradient-to-b from-gray-200 to-purple-400 p-4 rounded-md shadow-lg max-w-lg mx-auto">
              <strong>Brands And Products Manager</strong>:This web application is designed to allow users to manage 
              brands and products efficiently. The platform provides functionality for creating, updating, deleting, 
              and viewing detailed information about brands and their associated products; offers a 
              user-friendly interface, responsive design, and a seamless user experience.  
              This project was developed using React.js, TailwindCSS, and Firebase. It is deployed on Vercel to ensure 
              easy access and robust performance
            </p>
          
          )}
        </div>
        <br/>
      </div>
    </div>
  );
};

export default Projects;
