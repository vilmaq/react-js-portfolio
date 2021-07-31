import React from "react";

export default function Footer() {
  return (
    <footer className="h-20 bg-yellow-400 width: 100%">
      <div
        className="pt-4 md:flex md:items-up md:justify-center "
        style={{ borderTop: "0px solid white" }}
      >
        <ul className="">
          <li
            className="md:mx-2 md:inline leading-7 text-sm"
            id="footer-navi-2"
          >
            <a
              className="text-white underline text-small"
              href="https://github.com/vilmaq"
            >
              <i className="fab fa-github fa-3x"></i>
            </a>
          </li>
          <li
            className="md:mx-2 md:inline leading-7 text-sm"
            id="footer-navi-2"
          >
            <a
              className="text-white underline text-small"
              href="https://www.linkedin.com/in/vilmaqerama/"
            >
              <i class="fab fa-linkedin-in fa-3x"></i>
            </a>
          </li>
          <li
            className="md:mx-2 md:inline leading-7 text-sm"
            id="footer-navi-2"
          >
            <a
              className="text-white underline text-small"
              href="https://twitter.com/V174A"
            >
              <i class="fab fa-twitter fa-3x"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
