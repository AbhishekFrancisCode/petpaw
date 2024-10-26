import React, { useState } from 'react';

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="text-2xl focus:outline-none"
        onClick={toggleMenu}
      >
        &#9776; {/* Hamburger icon */}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded">
          <button
            className="text-xl absolute top-2 right-2 focus:outline-none"
            onClick={closeMenu}
          >
            &times; {/* Close icon */}
          </button>
          <ul className="py-2">
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={closeMenu}
            >
              Home
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={closeMenu}
            >
              About
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={closeMenu}
            >
              Services
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={closeMenu}
            >
              Contact
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
