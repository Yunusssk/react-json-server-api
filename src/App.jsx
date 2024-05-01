import './App.css'
import ProductCard from "./components/ProductCard";
import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';


function App() {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        // API'den verileri çek
        fetch("http://localhost:3000/products")
            .then((response) => response.json())
            .then((data) => {
                setProduct(data)
            })
            .catch((error) => console.error("Error fetching users:", error));
    }, []);


    return (
        <>
            <div className="App">
                <div className='navbar'>
                    <img src="./assets/img/cyber.png"></img>
                    <input type='search' placeholder='Search'></input>
                    <h2>Home</h2>
                    <h2>About</h2>
                    <h2>Contact Us</h2>
                    <h2>Blog</h2>
                    <span className="material-symbols-outlined">favorite</span>
                    <span className="material-symbols-outlined">shopping_cart</span>
                    <span className="material-symbols-outlined">person</span>
                </div>
                <hr className='navbar-hr' />
                <div className='body'>
                    <div className='filter'>

                    </div>
                    <div className='products'>
                        {products.map((product) => (
                            <ProductCard key={product.id} id={product.id} name={product.title} image={product.image} price={product.price} />
                        ))}
                    </div>
                </div>
                <div className='app'>
                <Routes>
                    <Route path='/products' element={<ProductDetail />} />
                </Routes>
                </div>
                

                
            </div>
        </>
    )
}

export default App
