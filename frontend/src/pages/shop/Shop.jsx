import React, { useEffect, useState } from "react";
import { PiCowDuotone, PiDotsThreeOutlineLight } from "react-icons/pi";
import { LuBird } from "react-icons/lu";
import { FaCat, FaDog } from "react-icons/fa";
import { Search } from "lucide-react";
import Shop_ItemCard from "@/components/shop/Shop_ItemCard";

const Shop = () => {
  const [item_data, setItem_data] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch_ItemData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/item");
        if (response.status === 404) {
          setError("No items found");
        }
        const data = await response.json();
        setItem_data(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetch_ItemData();
  });

  const icon_Map = [
    { name: "dog", icon: FaDog },
    { name: "cat", icon: FaCat },
    { name: "cow", icon: PiCowDuotone },
    { name: "bird", icon: LuBird },
    { name: "other", icon: PiDotsThreeOutlineLight },
  ];

  return (
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <div className="relative">
          <Search className="h-4 w-4 absolute top-3 left-3 text-slate-600" />
          <input
            className="w-full md:w-[300px] pl-9 p-2 rounded-full bg-slate-100 focus-visible:ring-slate-200"
            placeholder="Search for a item"
          />
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
          {icon_Map.map((item) => {
            return (
              <button
                key={item.name}
                className="py-2 px-3 border border-slate-200 
              rounded-full flex items-center gap-x-2 
              hover:border-sky-700 transition"
                type="button"
              >
                <item.icon size={18} />
                <div className="truncate">{item.name}</div>
              </button>
            );
          })}
        </div>
        <div>
          {item_data.length === 0 ? (
            <div className="text-center text-sm text-muted-foreground mt-10">
              No Items
            </div>
          ) : (
            <Shop_ItemCard items={item_data} />
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
