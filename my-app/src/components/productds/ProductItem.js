import React, { useState } from 'react';
import './ProductItem.css';

function ProductItem(props) {
    const price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.price);
    const [name, setName] = useState(props.name);


    const titleClickHandler = () => {
        // setName assigns new value for state "name"
        setName(name + ' clicked');
    }

    return (
        <div className="product-item">
            <div>{props.category}</div>
            <div className="product-item__description">
                <h3 onClick={titleClickHandler}>{name}</h3>
                <div className="product-item__price">{price}</div>
            </div>
        </div>
)
}

export default ProductItem;
