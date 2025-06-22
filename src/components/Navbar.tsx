import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex w-full overflow-hidden pt-10 pb-1">
      <nav className="w-full">
        <div className="container mx-auto flex flex-wrap items-center md:flex-no-wrap">
          <div className="mr-4 md:mr-8">
            <a href="/" className="text-2xl font-signika font-bold">SOPHIA WILLIAMS</a>
          </div>
          <div className="ml-auto md:hidden flex items-center justify-start">
            <button
              onClick={() => setOpen(!open)}
              className="tap-highlight-transparent text-black dark:text-white w-5 h-5 relative focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? 'rotate-45 -translate-y-1.5' : ''}`}></span>
                <span aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? 'opacity-0' : ''}`}></span>
                <span aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? '-rotate-45 translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
          <div className={`w-full h-${open ? 'auto' : '0'} transition-all ease-out duration-500 md:w-auto md:flex-grow md:flex md:items-center`}>
            <ul className="flex flex-col duration-300 ease-out md:space-x-5 sm:transition-none mt-5 md:flex-row md:items-center md:ml-auto md:mt-0 md:pt-0 md:border-0">
              <li className="group transition duration-300">
                <div className="font-signika text-2xl tap-highlight-transparent group-hover:text-gray-600 dark:group-hover:text-gray-300">PORTFOLIO
                  <span className="hidden md:block h-0.5 bg-black dark:bg-white group-hover:max-w-full transition-all duration-500 max-w-0"></span>
                </div>
              </li>
              <li className="group transition duration-300">
                <div className="font-signika text-2xl tap-highlight-transparent group-hover:text-gray-600 dark:group-hover:text-gray-300"> POCLASSIFY
                  <span className="hidden md:block h-0.5 bg-black dark:bg-white group-hover:max-w-full transition-all duration-500 max-w-0"></span>
                </div>
              </li>
              <li className="group transition duration-300">
                <div className="font-signika text-2xl tap-highlight-transparent group-hover:text-gray-600 dark:group-hover:text-gray-300">POCARTOON
                  <span className="hidden md:block h-0.5 bg-black dark:bg-white group-hover:max-w-full transition-all duration-500 max-w-0"></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;