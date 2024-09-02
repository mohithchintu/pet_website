import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { Link } from "react-router-dom";

const Shop_ItemCard = ({ items }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
      {items.map((item) => (
        <Link to={`/shop/item/${item.iid}`} key={item.iid}>
          <div className="group hover:shadow-sm overflow-hidden border rounded-lg p-3 h-full">
            <div className="relative w-full aspect-video rounded-md overflow-hidden">
              <img className="object-cover" alt={item.name} src="/" />
            </div>
            <div className="flex flex-col pt-2">
              <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
                {item.item_name}
              </div>
              <p className="text-sm text-muted-foreground">{item.catagory}</p>
              <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
                <div className="flex items-center gap-x-1 text-slate-500">
                  <IoMdPricetags size={20} />
                  <span className="text-sm">{item.price} rupees</span>
                </div>
              </div>
              <p className="flex items-center text-md md:text-sm font-medium text-slate-700">
                <FaRupeeSign />
                <span>{item.price}</span>
              </p>
              <button className="mt-3 p-1 rounded-md bg-sky-400 hover:bg-sky-300 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Shop_ItemCard;
