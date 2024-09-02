import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoMdPricetags } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";
import Pagenotfound from "../Pagenotfound";

const Item = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/item/${itemId}`
        );
        if (!response.ok) {
          throw new Error("Item not found");
        }
        const data = await response.json();
        setItem(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchItem();
  }, [itemId]);

  if (isLoading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    if (error.status === 404) {
      return <Pagenotfound />;
    }
    return <div className="text-center p-4 ">{error}</div>;
  }

  if (!item) {
    return <div className="text-center p-4">Item not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex justify-center items-center">
          <img
            src={"/"}
            alt={item.item_name}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800">{item.item_name}</h1>
          <p className="text-lg text-gray-600 mt-2">{item.catagory}</p>
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
          <p className="text-gray-700 mt-4">{item.description}</p>
          <button className="mt-6 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
