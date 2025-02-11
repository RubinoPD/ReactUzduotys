import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  const [products] = useState([
    { id: 1, name: "Knyga" },
    { id: 2, name: "Telefonas" },
    { id: 3, name: "Kompiuteris" },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  return (
    <div className="app-container">
      <h1>Pirkinių krepšelis</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
