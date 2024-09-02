import React, { useEffect, useState } from "react";
import Shop_ItemCard from "@/components/shop/Shop_ItemCard";

const Meds = () => {
  const [meds, setMed_items] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedsData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/item/category/Meds"
        );
        if (response.status === 404) {
          setError("No Meds items found");
        }
        const data = await response.json();
        setMed_items(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMedsData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <h1 className="p-5 font-semibold text-2xl">Meds Mart</h1>
      <div className="px-6 space-y-4">
        {meds.length === 0 ? (
          <div className="text-center text-sm text-muted-foreground mt-10">
            No Items
          </div>
        ) : (
          <Shop_ItemCard items={meds} />
        )}
      </div>
    </>
  );
};

export default Meds;
