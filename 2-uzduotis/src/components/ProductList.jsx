import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Prekių sąrašas</h2>
      {products.map((products) => (
        <ProductItem
          key={products.id}
          product={products}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
