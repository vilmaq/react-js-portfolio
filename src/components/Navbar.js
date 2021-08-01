import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center position:absolute">
      <a href="#portfolio" className="mr-5 hover:text-white">
        Portfolio
      </a>
      {/* <a href="#skills" className="mr-5 hover:text-white">
        Skills
      </a>
      <a href="#education" className="mr-5 hover:text-white">
        Education
      </a> */}
      <a href="#contact" className="mr-5 hover:text-white">
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
