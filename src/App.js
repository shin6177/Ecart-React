import React from 'react'
import Header from './MainComponenets/Header'
import Home from './MainComponenets/Home'
import Footer from './MainComponenets/Footer'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import About from './MainComponenets/About'
import Contact from './MainComponenets/Contact'
import Products from './MainComponenets/Products'
import Cart from './MainComponenets/Cart'
import SingleProduct from './MainComponenets/SingleProduct'
import './App.css'

const App = () => {
  return (
      <>
      <div className='app'>
      <Header/>    
      <Routes>
        <Route path='/' element={ <Home/>}/>  
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/products' element={<Products/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/SingleProduct/:id' element={<SingleProduct/>}/>
         <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
      </div>
      </>
  )
}

export default App