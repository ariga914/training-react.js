import "./ProductItem.css"
function ProductItem(props) {
    const price = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(props.price)
    
    return (
        <div className="product-item">
            <div>{props.category}</div>
            <div className="product-item_description">
                <h3>{props.name}</h3>
                <div className="product-item_price">{price}</div>
            </div>
        </div>
    )
}

export default ProductItem;