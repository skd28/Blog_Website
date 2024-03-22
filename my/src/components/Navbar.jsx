import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaDribbble,
  FaBars,
  FaXmark,
  FaListUl,
} from "react-icons/fa6";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const toggle = () => {
    setIsMenu(!isMenu);
  };
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/service", link: "Service" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blog" },
    { path: "/contact", link: "Contact" },
  ];

  return (
    <>
      <header className="bg-black text-white  fixed top-0 right-0 left-0">
        <nav className="px-4 py-4 mx-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-white">
            Design <span className="text-orange-400">Dk</span>
          </a>

          <ul className="md:flex gap-12 text-lg hidden">
            {navItems.map(({ path, link }) => (
              <li key={path} className="text-white">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : " "
                  }
                  to={path}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="text-white lg:flex gap-4 items-center hidden">
            <a href="/" className="hover:text-orange-500">
              <FaFacebook />{" "}
            </a>
            <a href="/" className="hover:text-orange-500">
              <FaDribbble />{" "}
            </a>
            <a href="/" className="hover:text-orange-500">
              <FaTwitter />{" "}
            </a>
            <button
              className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500
            translate-all duration-200 ease-in"
            >
              Log in
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={toggle} className="cursor-pointer">
              {isMenu ? (
                <FaXmark className=" w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>

        <div>
          <ul
            className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
              isMenu
                ? "fixed top-0 left-0 w-full translate-all  ease-out duration-300"
                : "hidden"
            } `}
          >
            {navItems.map(({ path, link }) => (
              <li key={path} className="text-black">
                <NavLink onClick={toggle} to={path}>
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
