import { useState } from 'react';
import logo from '../assets/logoimg.jpg'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RiCloseLargeFill} from 'react-icons/ri'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" sticky top-0 bg-white  z-40">
      <div className="flex justify-between items-center max-w-[1000px] mx-auto px-4 py-3">
        <div className="flex items-center">
          <img src={logo} className="h-10 w-10" alt="logo" />
          <div className="ml-2 leading-tight">
            <h2 className="text-sm text-gray-600">Dare Behavioral</h2>
            <span className="text-xs text-gray-600">Health and Wellness</span>
          </div>
        </div>

        <ul className="hidden md:flex space-x-6 text-sm text-gray-600">
          <li><a href="#Home" className="hover:text-green-600">Home</a></li>
          <li><a href="#Services" className="hover:text-green-600">Services</a></li>
          <li><a href="#AboutUs" className="hover:text-green-600">About Us</a></li>
          <li><a href="#ContactUs" className="hover:text-green-600">Contact Us</a></li>
        </ul>

        <div
          className="cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RiCloseLargeFill size={20} /> : <GiHamburgerMenu size={20} />}
        </div>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 py-4 text-sm text-gray-600">
          <li><a href="#Home" className="hover:text-green-600">Home</a></li>
          <li><a href="#Service" className="hover:text-green-600">Service</a></li>
          <li><a href="#AboutUs" className="hover:text-green-600">About Us</a></li>
          <li><a href="#ContactUs" className="hover:text-green-600">Contact Us</a></li>
        </ul>
      )}
    </nav>
  );
};
export default Navbar















