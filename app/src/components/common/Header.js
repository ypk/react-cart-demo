import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts";
import { Icons } from "../common";

const Header = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const { LoginIcon, CartIcon } = Icons;
  const { itemsCount } = useContext(CartContext);

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsMenuHidden(!isMenuHidden);
  };

  return (
    <header>
      <nav id="header" className="w-full z-30 top-0 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3 shadow-xl md:shadow-none">
          <div
            className={`${isMenuHidden ? "md:hidden" : ""} menu-btn-container`}
            onClick={toggleMenu}
          >
            <label
              htmlFor="menu-toggle"
              className="cursor-pointer md:hidden block"
            >
              <svg
                className="fill-current text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <title>Nav Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </label>
          </div>
          <div
            className={`${
              isMenuHidden ? "hidden" : ""
            } md:flex md:items-center md:w-auto w-full order-3 md:order-1`}
          >
            <nav>
              <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                <li>
                  <Link
                    className="inline-block no-underline hover:text-black py-2 pr-4 text-black hover:text-blue-400 focus:text-blue-400"
                    to="/about"
                    title="About"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block no-underline hover:text-black py-2 pr-4 text-black hover:text-blue-400 focus:text-blue-400"
                    to="/products"
                    title="Products"
                  >
                    Products
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="order-1 md:order-2">
            <Link
              className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 font-cinzel text-2xl"
              to="/"
            >
              <svg
                className="fill-current text-gray-800 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
              </svg>
              mála
            </Link>
          </div>

          <div
            className="order-2 md:order-3 flex items-center"
            id="nav-content"
          >
            <Link
              className="no-underline hover:text-blue-400"
              to="/login"
              title="Login"
            >
              <LoginIcon className="w-8 h-10 group-focus:text-blue-400 group-hover:text-blue-400" />
            </Link>

            <Link
              title="Cart"
              className="group flex flex-row no-underline mx-4"
              to="/cart"
            >
              <CartIcon className="w-8 h-10 group-focus:text-blue-400 group-hover:text-blue-400 mx-2" />
              {itemsCount > 0 ? (
                <button className="bg-black group-hover:bg-blue-400 group-focus:bg-blue-400 text-white font-bold py-2 px-4 rounded-full text-sm px-2 ml-2">
                  <span className="mx-1">{itemsCount}</span>
                  {itemsCount < 2 ? "Item" : "Items"} in cart
                </button>
              ) : null}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
