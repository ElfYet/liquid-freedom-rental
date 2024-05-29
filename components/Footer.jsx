import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-white">
      {/* Footer Wave CSS Source:
        https://www.codewithrandom.com/2023/02/13/simple-css-waves-wave-background-css-pure-css-wave/ */}
      <div>
        <div>
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="#155e75" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="#0e7490" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="#0891b2" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>

      {/* Footer Source:
        https://flowbite.com */}
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-4 bg-white">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src="/assets/images/placeholderLogo.svg" className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Liquid Freedom</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-black">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">About</a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-black sm:mx-auto dark:border-black lg:my-8" />
          <span className="block text-sm text-black sm:text-center dark:text-black">© 2024 <a href="https://flowbite.com/" className="hover:underline">Liquid Freedom™</a>. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;