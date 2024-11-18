import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        { id: 1, link: 'Home' },
        { id: 2, link: 'About' },
        { id: 3, link: 'Projects' },
        { id: 4, link: 'Contact' },
    ];

    return (
        <div className="flex justify-between  items-center w-full h-20 text-white bg-gray-900 px-4 fixed z-50">
            <div>
                <h1 className="text-3xl lg:text-5xl font-signature text-pink-700 ml-2">Sameena Zubair</h1>
            </div>
            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li key={id} className="px-4 cursor-pointer font-medium text-white hover:scale-105 duration-200">
                        <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))}
            </ul>
            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-50 text-gray-500 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 z-40">
                    {links.map(({ id, link }) => (
                        <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
                            <Link to={link} smooth duration={500} onClick={() => setNav(!nav)}>{link}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NavBar;  
