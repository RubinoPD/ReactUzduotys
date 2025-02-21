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
    const isInCart = cartItems.some((item) => item.id === product.id);
    if (!isInCart) {
      setCartItems([...cartItems, product]);
    } else {
      alert("Prekė jau yra krepšelyje");
    }
  };

  const removeFromCart = (product) => {
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      const newCartItems = [...cartItems];
      newCartItems.splice(index, 1);
      setCartItems(newCartItems);
    }
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
