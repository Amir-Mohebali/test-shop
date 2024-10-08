import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'

import { data } from './utilities/products'
import './App.css'

function App() {
  // {cat: 'tv', brand: 'Samsung', model: 'S50D', id: '1'},
  // {cat: 'tv', brand: 'Samsung', model: 'S60D', id: '2'},
  // {cat: 'laptop', brand: 'ASUS', model: 'Vivo Book', id: '1'},
  // {cat: 'phone', brand: 'Sony', model: 'X8', id: '1'},
  // {cat: 'phone', brand: 'Sony', model: 'X8', id: '2'},
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    setProducts(data);
  }, [])
  
  // const keys = products.map(product => Object.keys(product));
  // const values = products.map(product => Object.values(product));

  // products.map(product => console.log(Object.keys(product)));
  
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path='/' element={<Home items={products}/>}/> */}
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/products/:type' element={<ProductList/>} />
        <Route path='/products/tv/:productId' element={<ProductDetails category="tv"/>} />
        <Route path='/products/phone/:productId' element={<ProductDetails category="phone"/>} />
        <Route path='/products/laptop/:productId' element={<ProductDetails category="laptop"/>} />
      </Routes>
    </>
  )
}

export default App
