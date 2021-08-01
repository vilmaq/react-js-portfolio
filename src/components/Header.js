import React from "react";

export default function Header({ children }) {
  return (
    <header className="bg-gray-800 sticky top-0 z-10 position:absolute">
      <div className="container mx-auto sticky  flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about">
            <img src="./logV.png" alt="profile" />
          </a>
        </a>
        {children}
      </div>
    </header>
  );
}
