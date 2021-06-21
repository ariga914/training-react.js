import React, { useState, Fragment } from "react";
import "./App.css";
import NewProduct from "./components/productds/NewProduct";
import ProductList from "./components/productds/ProductList";

const DEFAULT_PRODUCTS =[
    {id: Math.floor(Math.random() * 100), name: "Dress", category: "Fashion", price: 12},
    {id: Math.floor(Math.random() * 100), name: "T-shirt",　category: "Fashion", price: 12},
    {id: Math.floor(Math.random() * 100), name: "Red Dress", category: "Fashion", price: 20},
    {id: Math.floor(Math.random() * 100), name: "iPhoneX", category: "Smartphone", price: 600},
    {id: Math.floor(Math.random() * 100), name: "iPhone 12", category: "Fashion", price: 1200},
    {id: Math.floor(Math.random() * 100), name: "Smar Tivi Sony 50 Inch", category: "Smar Tivi", price: 700}
];

function App() {
    const [products, setProducts] = useState(DEFAULT_PRODUCTS)

    const addProductHandler = (product) => {
        product.id = Math.floor(Math.random() * 100);
        setProducts((prevProducts) => {
            return [product, ...prevProducts]
        });
    };

    return ( 
        <Fragment>
            <h2> Getting start with React. </h2>
            <NewProduct onAddProduct={addProductHandler}></NewProduct> 
            <ProductList products={products}></ProductList>
        </Fragment>
    );
}

export default App;