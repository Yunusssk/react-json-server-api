import { useState } from 'react'
import './App.css'
import productCard from './components/productCard.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='navbar'>
        <img src="./assets/img/cyber.png"></img>
        <input type='search' placeholder='Search'></input>
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Contact Us</h2>
        <h2>Blog</h2>
        <span class="material-symbols-outlined">favorite</span>
        <span class="material-symbols-outlined">shopping_cart</span>
        <span class="material-symbols-outlined">person</span>
      </div>
      <hr className='navbar-hr' />
      <div className='body'>
        <div className='filter'></div>
        <div className='products'>
          <productCard />
          <productCard />
          <productCard />
          <productCard />
          <productCard />
          <productCard />
          <productCard />
          <productCard />
          <productCard />
        </div>
      </div>

    </>
  )
}

export default App
