import React, { useEffect, useState } from "react";
import Shop_ItemCard from "@/components/shop/Shop_ItemCard";

const Food = () => {
  const [food_items, setFood_items] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/item/category/Food"
        );
        if (response.status === 404) {
          setError("No food items found");
        }
        const data = await response.json();
        setFood_items(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFoodData();
  }, []);
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <h1 className="p-5 font-semibold text-2xl">Food Mart</h1>
      <div className="px-6 space-y-4">
        {food_items.length === 0 ? (
          <div className="text-center text-sm text-muted-foreground mt-10">
            No Items
          </div>
        ) : (
          <Shop_ItemCard items={food_items} />
        )}
      </div>
    </>
  );
};

export default Food;
