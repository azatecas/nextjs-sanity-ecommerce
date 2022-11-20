import React from "react";
import { Product, HeroBanner, FooterBanner } from '../components'
const Home = () => {
  return (
    <>
      Hero Banner will go here
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {["product 1", "product 2"].map((name) => (
          <p>{name}</p>
        ))}
      </div>
    </>
  );
};

export default Home;
