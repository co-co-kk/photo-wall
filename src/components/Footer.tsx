import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaBehance } from 'react-icons/fa';

const Footer = () => (
  <footer>
    <div className="max-w-screen-xl py-16 mx-auto">
      <div className="grid grid-cols-1 gap-8 text-center mx-auto">
        <div>
          <p className="font-signika"><b>SOPHIA WILLIAMS</b></p>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">929 Sycamore Street San Francisco CA<br />(415) 208-2116</p>
          <div className="flex mx-auto">
            <div className="mx-auto space-x-6 flex mt-8 text-gray-600 dark:text-gray-300">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="transition duration-300 hover:opacity-75">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="transition duration-300 hover:opacity-75">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="transition duration-300 hover:opacity-75">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="transition duration-300 hover:opacity-75">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://www.behance.net" target="_blank" rel="noreferrer" className="transition duration-300 hover:opacity-75">
                <FaBehance className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-8 text-xs text-gray-600 dark:text-gray-300 text-center">© 2023 Developed and Designed by <a href="https://www.linkedin.com/in/joão-franco-452161195/" className="underline">João Franco</a></p>
    </div>
  </footer>
);

export default Footer;