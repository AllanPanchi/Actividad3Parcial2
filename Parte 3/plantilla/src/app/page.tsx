// pages/index.js
import React from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is a description for product 1",
    price: 29.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is a description for product 2",
    price: 49.99,
    image: "https://via.placeholder.com/150",
  },
  // More products...
];

export default function HomePage() {
  return (
    <div>
      <Header name="Home Page"/>
      <main className="container mx-auto my-8">
        <ProductList products={products} />
      </main>
      <Footer />
    </div>
  );
};
