"use client";

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('black');

  const [dropdownDesktopOpen, setDropdownDesktopOpen] = useState(false);
  const [dropdownMobileOpen, setDropdownMobileOpen] = useState(false);

  const dropdownRefDesktop = useRef(null);
  const dropdownRefMobile = useRef(null);


  const toggleDropdownDesktop = () => {
    setDropdownDesktopOpen(!dropdownDesktopOpen);
  };

  const toggleDropdownMobile = () => {
    setDropdownMobileOpen(!dropdownMobileOpen)
  }

  const handleClickOutsideDesktop = (event) => {
    if (dropdownRefDesktop.current && dropdownDesktopOpen && !dropdownRefDesktop.current.contains(event.target)) {
      setDropdownDesktopOpen(!dropdownDesktopOpen);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideDesktop);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideDesktop);
    };
  }, [dropdownDesktopOpen]);

  const handleClickOutsideMobile = (event) => {
    if (dropdownRefMobile.current && dropdownMobileOpen && !dropdownRefMobile.current.contains(event.target)) {
      setDropdownMobileOpen(!dropdownMobileOpen);
    }
  };
  
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideMobile);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMobile);
    };
  }, [dropdownMobileOpen]);


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

          <li onClick={toggleDropdownDesktop} className="p-4 relative list-none" ref={dropdownRefDesktop}>
            <button
              className="white_btn"
            >
              Contact
              <svg className={`-mr-1 h-5 w-5  text-black transition-transform duration-300 ${dropdownDesktopOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            {dropdownDesktopOpen && (
              <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <div className="block px-4 py-2 text-black">Email: example@example.com</div>
                <div className="block px-4 py-2 text-black">Phone: (123) 456-7890</div>
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
          <AiOutlineClose size={25} style={{ color: 'black' }} />
        ) : (
          <AiOutlineMenu size={25} style={{ color: 'black' }} />
        )}
      </div>
      {/* Mobile Menu */}
      <div
        className={`${nav ? 'nav-open' : ''} nav sm:hidden absolute top-16 left-0 w-full bg-cyan-600 flex flex-col items-center text-center rounded-md` }
      >
        <ul className='w-full'>
          <li onClick={handleNav} className='p-4 text-2xl border-b-2 shadow-lg border-white rounded-lg'>
            <Link href='/'>
              <div className="block w-full h-full cursor-pointer">Home</div>
            </Link>
          </li>

          <li onClick={handleNav} className='p-4 text-2xl border-b-2 shadow-lg border-white rounded-lg'>
            <Link href='/about'>
              <div className="block w-full h-full cursor-pointer">About</div>
            </Link>
          </li>

          <li onClick={handleNav} className='p-4 text-2xl border-b-2 shadow-lg border-white rounded-lg'>
            <Link href='/rentals'>
              <div className="block w-full h-full cursor-pointer">Rentals</div>
            </Link>
          </li>

          <li onClick={toggleDropdownMobile} className='p-4 text-2xl border-b-2 cursor-pointer shadow-lg items-center static border-white rounded-lg' ref={dropdownRefMobile}>
            Contact
            <svg className={`-mr-1 h-5 w-5 inline-block  text-black transition-transform duration-300 ${dropdownMobileOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
            {dropdownMobileOpen && (
              <div className="mt-2 w-full bg-white shadow-lg z-10 rounded-md">
                <div className="block px-4 py-2 text-black">Email: example@example.com</div>
                <div className="block px-4 py-2 text-black">Phone: (123) 456-7890</div>
              </div>
            )}
          </li>

          <li onClick={handleNav} className='p-4 text-2xl border-b-2 shadow-lg border-white rounded-lg'>
            <Link href='/bookingstep1'>
              <div className="block w-full h-full cursor-pointer">Book</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Nav;