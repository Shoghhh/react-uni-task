import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ProductFilter from './components/ProductFilter';
import { Product } from './types';

export default function App() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Apple iPhone 13', category: 'Electronics', price: 799, description: "Description of Product A", image: "https://via.placeholder.com/150" },
    { id: 2, name: 'Nike Air Max', category: 'Footwear', price: 120, description: "Description of Product B", image: "https://via.placeholder.com/150" },
    { id: 3, name: 'Dell XPS 13', category: 'Electronics', price: 999, description: "Description of Product C", image: "https://via.placeholder.com/150" },
    { id: 4, name: 'Samsung Galaxy S21', category: 'Electronics', price: 799, description: "Description of Product D", image: "https://via.placeholder.com/150" },
    { id: 5, name: 'Adidas Ultraboost', category: 'Footwear', price: 180, description: "Description of Product E", image: "https://via.placeholder.com/150" },
  ]);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const handleFilter = (query: string) => {
    if (query === '') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="App">
      <h1>Product List</h1>
      <ProductFilter onFilter={handleFilter} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

