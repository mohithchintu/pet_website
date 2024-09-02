import React, { useEffect, useState } from "react";
import Shop_ItemCard from "@/components/shop/Shop_ItemCard";

const Other = () => {
  const [other_items, setOther_items] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOtherData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/item/category/Other"
        );
        if (response.status === 404) {
          setError("No Other items found");
        }
        const data = await response.json();
        setOther_items(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchOtherData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <h1 className="p-5 font-semibold text-2xl">Other Mart</h1>
      <div className="px-6 space-y-4">
        {other_items.length === 0 ? (
          <div className="text-center text-sm text-muted-foreground mt-10">
            No Items
          </div>
        ) : (
          <Shop_ItemCard items={other_items} />
        )}
      </div>
    </>
  );
};

export default Other;
