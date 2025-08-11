import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLargeFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import behalogo from "../assets/behalogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkCommon =
    "font-display font-medium leading-[24px] tracking-normal text-gray-600 flex items-center justify-center rounded-sm px-1 py-1 whitespace-nowrap hover:text-[#205C2A] transition-colors duration-300";

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50"
        style={{ height: "80px" }}
      >
        <div
          className="
            flex 
            justify-between 
            items-center 
            max-w-screen-xl 
            mx-auto 
            h-full
            px-4
            box-border
          "
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          {/* Logo container: stacked vertically always */}
<NavLink
  to="/"
  className="flex flex-row items-center shrink-0 max-w-[200px] whitespace-normal ml-6 "
>
  <img
    src={behalogo}
    alt="logo"
    className="w-[38px] h-[30px] object-contain mr-1"
  />
  <div className="flex flex-col justify-center leading-tight">
    <span className="font-urbanist font-semibold text-[#2A2A2E] m-0 text-[15px] leading-[18px] text-left">
      Dare Behavioral
    </span>
    <span className="font-urbanist font-semibold text-[#2A2A2E] m-0 text-[15px] leading-[18px] text-left">
      Health and Wellness
    </span>
  </div>
</NavLink>


          {/* Nav links - flush right */}
          <nav className="hidden md:flex space-x-6 md:space-x-8 flex-shrink-0 pr-10">
            <NavLink to="/" className={`${navLinkCommon} text-sm md:text-base`}>
              Home
            </NavLink>
            <NavLink to="/service" className={`${navLinkCommon} text-sm md:text-base`}>
              Service
            </NavLink>
            <NavLink to="/about" className={`${navLinkCommon} text-sm md:text-base`}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={`${navLinkCommon} text-sm md:text-base`}>
              Contact Us
            </NavLink>
          </nav>

          {/* Hamburger menu for mobile */}
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="md:hidden cursor-pointer text-gray-700 ml-auto shrink-0 pr-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <RiCloseLargeFill size={28} /> : <GiHamburgerMenu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 shadow-md">
            <ul className="flex flex-col items-center space-y-4 py-6 max-w-screen-xl mx-auto px-4 box-border">
              {[
                { to: "/", label: "Home" },
                { to: "/service", label: "Service" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.to} className="w-full">
                  <NavLink
                    to={link.to}
                    className="block text-center font-display font-semibold text-base text-gray-700 hover:text-[#205C2A]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Spacer div to prevent content from hiding under fixed navbar */}
      <div style={{ height: "80px" }} />
    </>
  );
};

export default Navbar;



