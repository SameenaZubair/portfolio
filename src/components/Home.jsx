import React from "react";
import MyImage from '../assets/MyImage.jpeg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="Home" className="w-full min-h-screen bg-gradient-to-b from-black via-slate-500 to-pink-100 text-white flex flex-col justify-center">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row-reverse items-center justify-center h-full px-4">

        {/* Photo Section */}
        <div className="w-full md:w-1/2 flex justify-center pt-10 md:pt-0 hover:scale-105 duration-500">
          <img 
            src={MyImage} 
            alt="My profile" 
            className="rounded-full w-2/3 md:w-4/5 aspect-square mx-auto object-cover" 
          />
        </div>

           {/* Text Section */}
           <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 mt-10 md:mt-0">
        <h2 className="text-3xl sm:text-6xl text-white font-bold font-signature"> 
            I am a <span className="font-signature sm:text-white md:text-custom lg:text-custom">Frontend Developer</span>
          </h2>
          

       
          <div className="mt-6 pt-8">
            <Link 
              to="Contact"
              smooth
              duration={500}
              className="text-black text-sm sm:text-base w-fit px-4 sm:px-6 py-2 sm:py-3 my-2 flex items-center rounded-md 
              bg-gradient-to-r from-pink-500 to-pink-100 cursor-pointer">
              Contact Me
              <span className="hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={20} className="ml-1"/>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


