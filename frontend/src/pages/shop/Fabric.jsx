import React, { useEffect, useState } from "react";
import Shop_ItemCard from "@/components/shop/Shop_ItemCard";

const Fabric = () => {
  const [fabric_items, setFabric_items] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFabricData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/item/category/Fabric"
        );
        if (response.status === 404) {
          setError("No fabric items found");
        }
        const data = await response.json();
        setFabric_items(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFabricData();
  }, []);
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <h1 className="p-5 font-semibold text-2xl">Fabric Mart</h1>
      <div className="px-6 space-y-4">
        {fabric_items.length === 0 ? (
          <div className="text-center text-sm text-muted-foreground mt-10">
            No Items
          </div>
        ) : (
          <Shop_ItemCard items={fabric_items} />
        )}
      </div>
    </>
  );
};

export default Fabric;
