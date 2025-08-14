import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLargeFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import behalogo from "../assets/behalogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Common styles for nav links – I set these up so all links have consistent typography & spacing
  const navLinkCommon =
    "font-display font-medium leading-[24px] tracking-normal text-gray-600 flex items-center justify-center rounded-sm px-1 py-1 whitespace-nowrap hover:text-[#205C2A] transition-colors duration-300";

  return (
    <>
      {/* Main navbar wrapper – fixed at top with white background */}
      <header
        className="fixed top-0 left-0 w-full bg-[#F9FAFA]  border-gray-200 z-50  w-full max-w-[1440px] h-[678px] mx-auto"
        style={{ height: "80px" }}
      >
        {/* Container – flex layout to space logo & navigation */}
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
          {/* Logo section – stacked text for business name */}
          <NavLink
            to="/"
            className="flex flex-row items-center shrink-0 max-w-[200px] whitespace-normal ml-6"
          >
            {/* Company logo image */}
            <img
              src={behalogo}
              alt="logo"
              className="w-[38px] h-[30px] object-contain mr-1"
            />

            {/* Business name – two lines, Urbanist font */}
            <div className="flex flex-col justify-center leading-tight">
              <span className="font-urbanist font-semibold text-[#2A2A2E] m-0 text-[13px] leading-[15px] tracking-normal text-left">
                Dare Behavioral
              </span>
              <span className="font-urbanist font-semibold text-[#2A2A2E] m-0 text-[13px] leading-[15px] tracking-normal text-left">
                Health and Wellness
              </span>
            </div>
          </NavLink>

          {/* Desktop navigation – hidden on small screens */}
          <nav className="hidden md:flex space-x-6 md:space-x-8 flex-shrink-0 pr-10 font-urbanist font-medium">
            {/* Highlighted Home link */}
            <NavLink
              to="/"
              className={`${navLinkCommon} font-urbanist font-medium text-[#32783E] text-sm md:text-base leading-6`}
            >
              Home
            </NavLink>

            {/* Regular nav links */}
            <NavLink
              to="/service"
              className={`${navLinkCommon} font-urbanist font-medium text-[#2A2A2E] text-sm md:text-base leading-6`}
            >
              Services
            </NavLink>

            <NavLink
              to="/about"
              className={`${navLinkCommon} font-urbanist font-medium text-[#2A2A2E] text-sm md:text-base leading-6 tracking-normal`}
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact"
              className={`${navLinkCommon} font-urbanist font-medium text-[#2A2A2E] text-sm md:text-base leading-6 tracking-normal`}
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Mobile hamburger menu button */}
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="md:hidden cursor-pointer text-gray-700 ml-auto shrink-0 pr-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <RiCloseLargeFill size={28} />
            ) : (
              <GiHamburgerMenu size={28} />
            )}
          </button>
        </div>

        {/* Mobile dropdown menu – only shows when isOpen is true */}
        {isOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 shadow-md">
            <ul className="flex flex-col items-center space-y-4 py-6 max-w-screen-xl mx-auto px-4 box-border font-urbanist">
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

      {/* Spacer div – prevents page content from sliding under the fixed navbar */}
      <div style={{ height: "80px" }} />
    </>
  );
};

export default Navbar;
