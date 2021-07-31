import React from "react";

export default function Footer() {
  return (
    <footer className="h-10 bg-blue-500">
      <div
        className="pt-4 md:flex md:items-center md:justify-center "
        style={{ borderTop: "1px solid white" }}
      >
        <ul className="">
          <li
            className="md:mx-2 md:inline leading-7 text-sm"
            id="footer-navi-2"
          >
            <a className="text-white underline text-small" href="/disclaimer">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </li>
          <li
            className="md:mx-2 md:inline leading-7 text-sm"
            id="footer-navi-2"
          >
            <i className="fab fa-github">
              <a className="text-white underline text-small" href="/cookie">
                Linkedin
              </a>
            </i>
          </li>
          <li
            className="md:mx-2 md:inline leading-7 text-sm"
            id="footer-navi-2"
          >
            <a className="text-white underline text-small" href="/privacy">
              Privacy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
