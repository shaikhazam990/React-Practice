import React from "react";
import "./Product.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99",
    image:
      "https://images.unsplash.com/photo-1518445697040-5c1f2f7b5f8f",
    description: "High-quality sound with noise cancellation and long battery life."
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$149",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    description: "Track your fitness, heart rate, and notifications on the go."
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: "$59",
    image:
      "https://images.unsplash.com/photo-1585386959984-a41552231693",
    description: "Durable, stylish backpack with space for all your essentials."
  }
];

const Product = () => {
  return (
    <div className="product-container">
      <h1 className="product-title">Our Products</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-desc">{product.description}</p>
              <div className="product-footer">
                <span className="price">{product.price}</span>
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;