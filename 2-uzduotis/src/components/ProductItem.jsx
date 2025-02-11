import React from "react";

const ProductItem = ({ product, addToCart }) => {
  return (
    <div>
      <span>{product.name}</span>
      <button onClick={() => addToCart(product)}>Pridėti į krepšelį</button>
    </div>
  );
};

export default ProductItem;
