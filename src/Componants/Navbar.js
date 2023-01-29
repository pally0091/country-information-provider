import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
const Navbar = () => {
    return (
      <div className="flex justify-between align-middle bg-sky-300 p-5 ">
        <h1
          className="text-3xl font-extrabold text-white"
          id="headName"
        >
          Country Information Provider
        </h1>
        <div className="lg:flex align-middle lg:flex-row sm:flex-col sm:flex ">
          <button className='m-4'>
            <Link
              className="p-2 mx-1 bg-white text-black font-semibold rounded-2xl hover:bg-sky-500 "
              to="/"
            >
              Home
            </Link>
          </button>
          <button className='m-4'>
            <Link
              className="p-2 mx-1 bg-white text-black font-semibold rounded-2xl hover:bg-sky-500 "
              to="/about"
            >
              About Me
            </Link>
          </button>
        </div>
      </div>
    );
};

export default Navbar;
