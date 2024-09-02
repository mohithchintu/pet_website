import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const updateLocalStorage = (cartItems) => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const handleQuantityChange = (id, amount) => {
    const updatedItems = cartItems
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + amount } : item
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updatedItems);
    updateLocalStorage(updatedItems);
  };

  const handleRemoveItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    updateLocalStorage(updatedItems);
  };

  const calculateSubtotal = (price, quantity) => (price * quantity).toFixed(2);

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  useEffect(() => {
    const fetchLocalCart = () => {
      try {
        const cart = localStorage.getItem("cart");
        if (cart) {
          setCartItems(JSON.parse(cart));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchLocalCart();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <>Cart is empty</>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {cartItems.map((item) => (
              <Card key={item.id} className="mb-4">
                <CardContent className="flex justify-between items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1 ml-4">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <button onClick={() => handleQuantityChange(item.id, -1)}>
                        <FaMinus />
                      </button>
                      <Input
                        value={item.quantity}
                        className="mx-2 w-8 text-center"
                        readOnly
                      />
                      <button onClick={() => handleQuantityChange(item.id, 1)}>
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                  <p className="text-lg font-semibold">
                    ${calculateSubtotal(item.price, item.quantity)}
                  </p>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 ml-4"
                  >
                    <MdDelete size={24} />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="h-full">
            <CardContent>
              <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${calculateTotal()}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax (18%)</span>
                <span>${(calculateTotal() * 0.18).toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>
              <div className="border-t-2 border-gray-200 pt-2 flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>
                  $
                  {(
                    parseFloat(calculateTotal()) +
                    parseFloat((calculateTotal() * 0.1).toFixed(2)) +
                    5
                  ).toFixed(2)}
                </span>
              </div>
            </CardContent>
            <CardFooter>
              <button className="w-full">Proceed to Checkout</button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Cart;
