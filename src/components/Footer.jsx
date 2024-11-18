import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Footer = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
        <FaLinkedin size={30} />
        </>
      ),
      href: 'https://Linkedin.com',
    },
    {
      id: 2,
      child: (
        <>
           <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/sameenazubair',
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:sameenazubair567@gmail.com',
    },
 
  ];

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-6">
        {/* Footer Links Section */}
        <div className="flex justify-center space-x-8 md:space-x-4">
          {links.map(({ id, child, href, download }) => (
            <a
              key={id}
              href={href}
              className="flex items-center justify-center text-white text-lg hover:text-pink-500 transition-colors duration-300"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              <span className="hidden sm:inline">{child}</span>
              <span className="sm:hidden">{React.cloneElement(child, { props: { size: 30 } })}</span>
            </a>
          ))}
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center text-sm mt-4">
          <p>&copy; {new Date().getFullYear()} Sameena Zubair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
