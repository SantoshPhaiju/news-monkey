import React from "react";
import logo from "../logo192.png";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div className="">
      <header className="text-gray-600 bg-slate-100 body-font w-[100%] fixed top-0">
        <div className="shadow-lg mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img
              src={logo}
              alt="logo"
              className="mx-3"
              width={40}
              height={50}
            />
            <span className="ml-5 text-2xl text-indigo-700">NewsMonkey</span>
          </Link>
          <nav className="flex mx-auto flex-wrap space-x-5 items-center text-lg justify-center text-indigo-500 font-normal">
            <Link to="/" className=" hover:text-gray-900">
              Home
            </Link>
            <Link to="/about" className=" hover:text-gray-900">
              About
            </Link>
            <Link to="/business" className=" hover:text-gray-900">
              Business
            </Link>
            <Link to="/entertainment" className=" hover:text-gray-900">
              Entertainment
            </Link>
            <Link to="/general" className=" hover:text-gray-900">
              General
            </Link>
            <Link to="/health" className=" hover:text-gray-900">
              Health
            </Link>
            <Link to="/science" className=" hover:text-gray-900">
              Science
            </Link>
            <Link to="/sports" className=" hover:text-gray-900">
              Sports
            </Link>
            <Link to="/technology" className=" hover:text-gray-900">
              Technology
            </Link>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar

 
