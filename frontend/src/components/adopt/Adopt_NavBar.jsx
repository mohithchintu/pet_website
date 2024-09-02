import React from "react";
import { FaPaw, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Adopt_NavBar = () => {
  return (
    <div className="flex space-x-4 border-b h-15 shadow-md p-5 items-center justify-between">
      <Link to="/adopt" className="flex gap-x-2 text-sky-700">
        <FaPaw size={30} />
        <h1>Title</h1>
      </Link>
      <div className="flex space-x-4 bg-sky-200 items-center shadow-md p-3">
        <div className="relative flex items-center group">
          <input
            type="search"
            placeholder="Search..."
            className="w-0 h-8 p-0 pl-8 bg-sky-200 transition-all duration-300 ease-in-out group-hover:w-40 group-hover:p-2 group-hover:border group-hover:bg-white group-hover:border-sky-700 group-hover:pl-8 focus:w-40 focus:p-2 focus:pl-8"
          />
          <FaSearch className="absolute left-2 text-sky-700 transition-opacity duration-300 ease-in-out" />
        </div>

        <Link to="/adopt/somerthing" className="text-sky-700">
          Something
        </Link>
        <Link to="/adopt/about" className="text-sky-700">
          About
        </Link>
        <Link to="/adopt/donate" className="text-sky-700">
          Donate
        </Link>
      </div>
      <div className="flex space-x-4 bg-sky-200 text-sky-700 shadow-md p-3">
        <Link to="/adopt/login">Login</Link>
      </div>
    </div>
  );
};

export default Adopt_NavBar;
