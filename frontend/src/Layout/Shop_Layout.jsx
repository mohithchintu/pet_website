import React from "react";
import { Outlet } from "react-router-dom";
import Shop_SideBar from "@/components/shop/Shop_SideBar";
import Shop_NavBar from "@/components/shop/Shop_NavBar";

const Shop_Layout = () => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        <Shop_NavBar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed insert-y-0 z-50">
        <Shop_SideBar />
      </div>
      <main className="md:pl-56 pt-[80px] h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Shop_Layout;
