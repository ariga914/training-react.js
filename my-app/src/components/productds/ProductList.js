import ProductItem from './ProductItem';
import List from '../UI/List';
import './ProductList.css'

function ProductList(props) {
    return (
        <List>
            <ProductItem
                name={props.products[0].name}
                price={props.products[0].price}
                category={props.products[0].category}
            ></ProductItem>
            <ProductItem
                name={props.products[1].name}
                price={props.products[1].price}
                category={props.products[1].category}
            ></ProductItem>
            <ProductItem
                name={props.products[2].name}
                price={props.products[2].price}
                category={props.products[2].category}
            ></ProductItem>
            <ProductItem
                name={props.products[3].name}
                price={props.products[3].price}
                category={props.products[3].category}
            ></ProductItem>
            <ProductItem
                name={props.products[4].name}
                price={props.products[4].price}
                category={props.products[4].category}
            ></ProductItem>
        </List>
    );
}

export default ProductList;
