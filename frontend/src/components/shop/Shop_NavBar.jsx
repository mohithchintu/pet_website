import { Menu, Search } from "lucide-react";
import React from "react";
import Shop_SideBar from "./Shop_SideBar";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const Shop_NavBar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <div className="hidden md:block">
        <div className="relative">
          <Search className="h-4 w-4 absolute top-3 left-3 text-slate-600" />
          <input
            className="w-full md:w-[300px] pl-9 p-2 rounded-full bg-slate-100 focus-visible:ring-slate-200"
            placeholder="Search for a item"
          />
        </div>
      </div>
      <Sheet>
        <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="p-0 bg-white">
          <Shop_SideBar />
        </SheetContent>
      </Sheet>
      <div className="flex gap-x-2 ml-auto">Profile</div>
    </div>
  );
};

export default Shop_NavBar;
