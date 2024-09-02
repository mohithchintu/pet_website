import React from "react";
import { Link } from "react-router-dom";

const Pagenotfound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 text-center p-6">
      <div className="max-w-md">
        <p className="mt-2 text-gray-600">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Pagenotfound;
