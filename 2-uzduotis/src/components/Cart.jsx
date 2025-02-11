import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Krepšelis</h2>
      {cartItems.length === 0 ? (
        <p>Krepšelis tuščias</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => removeFromCart(item)}>
              Pašalinti iš krepšelio
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
