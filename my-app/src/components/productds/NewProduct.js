import React, { useState, useRef } from 'react';
import './NewProduct.css';

const NewProduct = (props) => {
    // Define states for user input data
    const [inputedName, setInputedName] = useState('');
    const [inputedPrice, setInputedPrice] = useState('');
    const [inputedCategory, setSelectedCategory] = useState('');

    const  productNameElm = useRef(null);
    // Define handle functions for form events.
    const nameChangeHolder = (e) => {
        setInputedName(e.target.value);
    }
    const priceChangeHolder = (e) => {
        setInputedPrice(e.target.value);
    }
    const categoryChangeHolder = (e) => {
        setSelectedCategory(e.target.value);
    }
    // Handle form submitsion
    const submitHandler = (e) => {
        e.preventDefault();

        const productData = {
            name: inputedName,
            price: inputedPrice,
            category: inputedCategory
        };

        // Call the function to pass data to parent component
        props.onAddProduct(productData);

        // Reset form to empty
        setInputedName('');
        setInputedPrice('');
        setSelectedCategory('');

        productNameElm.current.focus();
    }

    return (
        <div className="new-product">
            <form onSubmit={submitHandler}>
                <div className="new-product_controls">
                    <div className="new-product_control">
                        <label>Name</label>
                        <input 
                            onChange={nameChangeHolder} 
                            value={inputedName} 
                            type="text" 
                            placeholder="Product name"
                            ref={productNameElm}    
                        />
                    </div>
                    <div className="new-product_control">
                        <label>Price</label>
                        <input type="number" placeholder="Product Price" onChange={priceChangeHolder} value={inputedPrice}></input>
                    </div>
                    <div className="new-product_control">
                        <select value={inputedCategory} onChange={categoryChangeHolder}>
                            <option value="Fashion">Fashion</option>
                            <option value="Smart Phone">Smartphone</option>
                            <option value="Smart Tivi">Smart Tivi</option>
                        </select>
                    </div>
                </div>
                <div className="new-product_actions">
                    <button type="submit">Add Product</button>
                </div>
            </form>
        </div>
    )
}
export default NewProduct;