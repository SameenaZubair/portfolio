import React from 'react';
import htmlnew from '../assets/htmlnew.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import github from '../assets/github.png';
import bootstrap from '../assets/bootstrap.png';
import redux from '../assets/redux.png';
import framer from '../assets/framer.png';

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: htmlnew,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: javascript,
      title: 'JAVASCRIPT',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: react,
      title: 'REACT',
      style: 'shadow-blue-600',
    },
    {
      id: 5,
      src: tailwind,
      title: 'TAILWIND',
      style: 'shadow-sky-400',
    },
    {
      id: 6,
      src: github,
      title: 'GITHUB',
      style: 'shadow-gray-400',
    },
    {
      id: 7,
      src: bootstrap,
      title: 'REDUX TOOLKIT',
      style: 'shadow-purple-600',
    },
    {
      id: 8,
      src: redux,
      title: 'BOOTSTRAP',
      style: 'shadow-pink-500',
    },
    {
      id: 9,
      src: framer,
      title: 'FRAMER MOTION',
      style: 'shadow-blue-500',
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 via-slate-700 to-pink-200 w-full h-full"
    >
      <br />
      <br />
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full font-serif text-black">
        <div className="pb-2 text-center">
          <p className="text-4xl font-bold italic border-b-4 -mt-8 border-gray-500 p-2 text-pink-500 inline">
            Skills
          </p>
        </div>

        <br />
        <br />

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-8 text-center py-8 px-4 sm:px-0">
  {techs.map(({ id, src, title, style }) => (
    <div
      key={id}
      className={`shadow-lg hover:scale-105 bg-gradient-to-b from-gray-500 to-fuchsia-200 duration-500 py-2 rounded-lg ${style}`}
    >
      <img src={src} alt={title} className="w-16 mx-auto sm:w-20" /> {/* Smaller icon for mobile */}
      <p className="mt-2 text-sm sm:text-base">{title}</p> {/* Smaller text for mobile */}
    </div>
  ))}
</div>

        <br />
        <br />
      </div>
    </div>
  );
};

export default Experience;
