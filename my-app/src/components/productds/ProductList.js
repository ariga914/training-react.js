import ProductItem from './ProductItem';
import List from '../UI/List';
import './ProductList.css'

function ProductList(props) {
    let listContent = <p>No Product</p>;

    if (props.products.length !== 0) {
        listContent = props.products.map( product => (
            <ProductItem
                key ={product.id}
                name={product.name}
                price={product.price}
                category={product.category}
            />
        ))
    }
    return (
        <List>
            {listContent}
        </List>
    );
}

export default ProductList;
