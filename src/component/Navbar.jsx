
import logo from '../assets/logoimg.jpg'
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseLargeFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = 'hover:text-green-600';

  return (
    <nav className="sticky top-0 bg-white z-40">
      <div className="flex justify-between items-center max-w-[1000px] mx-auto px-4 py-3">
        <div className="flex items-center">
          <img src={logo} className="h-10 w-10" alt="logo" />
          <div className="ml-2 leading-tight">
            <h2 className="text-sm text-gray-600">Dare Behavioral</h2>
            <span className="text-xs text-gray-600">Health and Wellness</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-sm text-gray-600">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/service" className={navLinkClass}>Service</NavLink>
          <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>
        </div>

        {/* Hamburger Icon */}
        <div
          className="cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RiCloseLargeFill size={20} /> : <GiHamburgerMenu size={20} />}
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 py-4 text-sm text-gray-600">
          <li><NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/service" className={navLinkClass} onClick={() => setIsOpen(false)}>Service</NavLink></li>
          <li><NavLink to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>About Us</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass} onClick={() => setIsOpen(false)}>Contact Us</NavLink></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;











//git remote add origin https://github.com/Wrightadebayo/Automedys.git
// git branch -M main
// git push -u origin main





