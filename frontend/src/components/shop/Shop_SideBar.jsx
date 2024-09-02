import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdPets } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { FaBriefcaseMedical } from "react-icons/fa";
import { PiDotsThreeOutlineLight } from "react-icons/pi";

const Shop_SideBar = () => {
  const side_routes = [
    { path: "/shop/Food", icon: FaBowlFood, name: "Food" },
    { path: "/shop/Fabric", icon: GiClothes, name: "Fabric" },
    { path: "/shop/Meds", icon: FaBriefcaseMedical, name: "Meds" },
    { path: "/shop/Other", icon: PiDotsThreeOutlineLight, name: "Other" },
  ];
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <Link to="/shop" className="p-4 flex gap-4 items-center mb-10">
        <MdPets size={48} className="text-sky-700" />
        <h1 className="text-md font-bold text-sky-700">Pet Shop</h1>
      </Link>
      <div className="flex flex-col w-full">
        {side_routes.map((route, index) => (
          <Link
            key={index}
            to={route.path}
            className={`flex items-center gap-x-2 text-sm font-[500] pl-6 transition-all ${
              pathname === route.path
                ? "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20"
                : "text-slate-500 hover:text-slate-600 hover:bg-slate-300/20"
            }`}
          >
            <route.icon
              size={26}
              className={`m-3 ${
                pathname === route.path ? "text-sky-700" : "text-slate-500"
              }`}
            />
            {route.name}
            <div
              className={`ml-auto border-2 border-sky-700 h-full transition-all ${
                pathname === route.path ? "opacity-100" : "opacity-0"
              }`}
            />
          </Link>
        ))}
      </div>
      <Link
        to="/adopt"
        className="mt-auto mx-6 mb-4 px-4 py-2 bg-sky-400 text-white text-center rounded shadow-md hover:bg-sky-600 transition"
      >
        GO TO ADOPT
      </Link>
    </div>
  );
};

export default Shop_SideBar;
