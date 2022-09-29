import React from "react";
import { useState } from "react";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-4 py-8 border-b border-gray-400">
      <a href="/">
        <img src="https://designbygio.it/images/logo.png" alt="logo" />
      </a>
      <nav>
        <section className="flex MOBILE-MENU lg:hidden">
          <div
            className="space-y-2 HAMBURGER-ICON"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? `showMenuNav` : `hideMenuNav`}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="w-8 h-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="my-8 uppercase border-b border-gray-400">
                <a href="/about">About</a>
              </li>
              <li className="my-8 uppercase border-b border-gray-400">
                <a href="/portfolio">Portfolio</a>
              </li>
              <li className="my-8 uppercase border-b border-gray-400">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="hidden space-x-8 DESKTOP-MENU lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}

export default Header;
