import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ProductFilter from './components/ProductFilter';
import { Product } from './types';

export default function App() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Apple iPhone 13', category: 'Electronics', price: 799, description: "Description of Product A", image: "https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/a/p/apple-iphone-13--pink-3.jpg" },
    { id: 2, name: 'Nike Air Max', category: 'Footwear', price: 120, description: "Description of Product B", image: "https://i8.amplience.net/i/jpl/jd_647114_a?v=1" },
    { id: 3, name: 'Dell XPS 13', category: 'Electronics', price: 999, description: "Description of Product C", image: "https://astringo-rugged.com/wp-content/uploads/2023/02/9320.png" },
    { id: 4, name: 'Samsung Galaxy S21', category: 'Electronics', price: 799, description: "Description of Product D", image: "https://images.samsung.com/is/image/samsung/p6pim/ca/sm-g991wzvaxac/gallery/ca-galaxy-s-sm-g991wzvaxac-front-phantom-violet-481769010?$330_330_JPG$" },
    { id: 5, name: 'Adidas Ultraboost', category: 'Footwear', price: 180, description: "Description of Product E", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4f225a0bbc3e43729858af0100006731_9366/ULTRABOOST_1.0_SHOES_White_HQ4207_01_00_standard.jpg" },
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

