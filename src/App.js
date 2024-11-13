import './App.css';
import AddProduct from './Components/AddProduct';
import Cards from './Components/Cards';
import axios from 'axios';
import Header from './Components/nav';
import React, { useState,useEffect } from 'react';
import HeroSection from './Components/HeroSection';
import Footer from './Components/footer';


function App() {
  const [products, setProducts] = useState([]);

  //get product
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/card/");
      setProducts(response.data);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };

  const addProduct = async (newProduct) => {
    try {
      await axios.post("http://localhost:8080/card/", newProduct);
      fetchProducts(); 
    } catch (err) {
      console.error("Error adding product", err);
    }
  };


   // Delete product
   const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/card/id/${id}`); 
      fetchProducts(); 
    } catch (err) {
      console.error("Error deleting product", err);
    }

  };
  
  //updateproduct
  const updateProduct = async (id, updatedData) => {
    try {
      await axios.put(`http://localhost:8080/card/id/${id}`, updatedData);
      fetchProducts(); // Re-fetch products to update the list after editing
    } catch (err) {
      console.error("Error updating product", err);
    }
  };
  
  useEffect(() => {
    fetchProducts();
  },[]);
  
  return (
    
    <div className="App">
    <Header/> 
    <HeroSection/>  
    <AddProduct addProduct={addProduct} /> 
    <Cards products={products} deleteProduct={deleteProduct}updateProduct={updateProduct}  /> 
    <Footer/> 
    </div>
  );
}

export default App;
