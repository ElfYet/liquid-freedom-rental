"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('black');

const [dropdownOpen, setDropdownOpen] = useState(false);

const toggleDropdown = () => {
  setDropdownOpen(!dropdownOpen);
}

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-black'>
        
      <Link href='/' className='flex gap-5 flex-center'>
        <Image
          src='/assets/images/placeholderLogo.svg'
          alt='logo'
          width={30}
          height={30}
          className='object-contain'
        />
          <h1 className='blue_gradient font-bold text-4xl'>
            Liquid Freedom
          </h1>
      </Link>

        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4'>
            <Link href='/' className='white_btn'>Home</Link>
          </li>
          <li className='p-4'>
            <Link href='/about' className='white_btn'>About</Link>
          </li>
          <li className='p-4'>
            <Link href='/rentals' className='white_btn'>Rentals</Link>
          </li>
          <li className="p-4 relative">
            <button
              onClick={toggleDropdown}
              className="white_btn"
            >
              Contact
              <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <div className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Email: example@example.com</div>
                <div className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Phone: (123) 456-7890</div>
              </div>
            )}
          </li>
          <li className='p-4'>
            <Link href='/bookingstep1' className='cyan_btn_main'>Book</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/about'>About</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/rentals'>Rentals</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;