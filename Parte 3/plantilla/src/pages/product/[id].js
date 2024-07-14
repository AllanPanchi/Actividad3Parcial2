// pages/product/[id].js
import React from 'react';
import ProductDetail from '../../components/productDetail';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Simulated product data
const product = {
  id: 1,
  name: 'Product 1',
  description: 'This is a detailed description for product 1. It includes all the features, benefits, and other relevant information about the product.',
  price: 29.99,
  image: 'https://via.placeholder.com/400',
};

const ProductDetailPage = ({ product }) => {
  return (
    <div>
      <Header name="Product Detail"/>
      <main className="container mx-auto my-8">
        <ProductDetail product={product} />
      </main>
      <Footer />
    </div>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get products
  // In a real app, replace the example with your data fetching logic
  const products = [{ id: 1 }, { id: 2 }, { id: 3 }];

  // Get the paths we want to pre-render based on products
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the product `id`.
  // If your route is /product/1, then params.id is 1
  // In a real app, replace the example with your data fetching logic
  const product = {
    id: params.id,
    name: 'Product ' + params.id,
    description: 'This is a detailed description for product ' + params.id,
    price: 29.99 + parseInt(params.id),
    image: 'https://via.placeholder.com/400',
  };

  // Pass product data to the page via props
  return { props: { product } };
}

export default ProductDetailPage;
