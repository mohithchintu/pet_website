import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-20 border-2 border-black rounded-md shadow-lg shadow-gray-300 bg-amber-50">
      <h1>Welcome</h1>
      <div className="flex  p-5 justify-between space-x-3">
        <Link
          className="p-2 border-2 border-black bg-violet-400 rounded-xl text-white hover:shadow-lg"
          to="/adopt"
        >
          Adopt Now{" ->"}
        </Link>
        <Link
          className="p-2 border-2 border-black bg-violet-400 rounded-xl text-white hover:shadow-lg"
          to="/new"
        >
          New {" ->"}
        </Link>
        <Link
          className="p-2 border-2 border-black bg-violet-400 rounded-xl text-white hover:shadow-lg"
          to="/shop"
        >
          Shop Now{" ->"}
        </Link>
      </div>
    </div>
  );
};

export default Home;
