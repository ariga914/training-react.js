import "./App.css";
import ProductList from "./components/productds/ProductList";

function App() {
    const products =[
        {name: "T-shirt",　category: "Fashion", price: 12},
        {name: "Red Dress", category: "Fashion", price: 20},
        {name: "iPhoneX", category: "Smartphone", price: 600},
        {name: "iPhone 12", category: "Fashion", price: 1200},
        {name: "Smar Tivi Sony 50 Inch", category: "Smar Tivi", price: 700}
    ];

    return ( 
        <div className="App">
            <h2> Getting start with React. </h2> 
            <ProductList products={products}></ProductList>
        </div>
    );
}

export default App;