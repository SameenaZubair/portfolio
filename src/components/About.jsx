 import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-screen min-h-screen bg-gradient-to-b overflow-y-hidden from-gray-800 via-slate-500 to-pink-200 text-black'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen'>
            <div className='pb-8 text-center'>
                <p className='text-4xl font-bold italic inline border-b-4 border-gray-500
                 text-pink-500 '>About</p>
            </div>
            <br/>
            <p className='lg:text-2xl md:text-2xl sm:text-xl pr-2 mt-15 text-center '>
            Hi, I’m Sameena Zubair, a front-end developer 💻  with a passion for creating visually appealing and highly functional 
            web applications. My journey into tech began with a Bachelor’s degree in Commerce, where I honed analytical 
            and problem-solving skills. However, my love for technology and design led me to pursue a career in front-end 
            development.
            </p>
            <br/>

            <p className='lg:text-2xl md:text-2xl sm:text-xl pr-2 text-center'>
            I specialize in React, Redux Toolkit, Tailwind CSS, and Bootstrap, building responsive, user-friendly interfaces
             that prioritize performance and aesthetics. With a solid foundation in JavaScript, HTML, and CSS, 
            I leverage modern frameworks and tools to bring creative ideas to life.
            </p>

            <p className='lg:text-2xl md:text-2xl sm:text-xl mt-5 pr-2 text-center'>
            My work reflects my dedication to clean code, modern design practices, and crafting seamless digital
             experiences. Beyond coding, I enjoy reading self-help books 📚 and exploring innovative solutions
            through technology. 
            </p>
            <br/>
            <p className='lg:text-2xl md:text-2xl sm:text-xl pr-2 text-center'>Let’s connect to create something impactful together! 🌟</p>
        </div>
    </div>
  )
}

export default About  

