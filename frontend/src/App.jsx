import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adopt_Layout from "./Layout/Adopt_Layout";
import Shop_Layout from "./Layout/Shop_Layout";
import Home from "./pages/Home";
import Shop from "./pages/shop/Shop";
import Food from "./pages/shop/Food";
import Fabric from "./pages/shop/Fabric";
import Meds from "./pages/shop/Meds";
import Other from "./pages/shop/Other";
import Item from "./pages/shop/Item";
import Adopt from "./pages/adopt/Adopt";
import Cart from "./pages/shop/Cart";
import Pagenotfound from "./pages/Pagenotfound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adopt" element={<Adopt_Layout />}>
          <Route index element={<Adopt />} />
        </Route>
        <Route path="/shop" element={<Shop_Layout />}>
          <Route index element={<Shop />} />
          <Route path="food" element={<Food />} />
          <Route path="fabric" element={<Fabric />} />
          <Route path="meds" element={<Meds />} />
          <Route path="other" element={<Other />} />
          <Route path="item/:itemId" element={<Item />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
