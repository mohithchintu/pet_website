import React from "react";
import { Outlet } from "react-router-dom";
import Adopt_NavBar from "@/components/adopt/Adopt_NavBar";

const Adopt_Layout = () => {
  return (
    <div>
      <Adopt_NavBar />
      <main>
        <Outlet />
      </main>
      <h1>Footer</h1>
    </div>
  );
};

export default Adopt_Layout;
