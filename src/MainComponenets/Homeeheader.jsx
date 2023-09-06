import React from 'react'
import '../Style.css/Home.css'
import { NavLink } from 'react-router-dom'


const Homeeheader = () => {
  return (
    <div className="home-container">
               <div className="section1">
                  <p className='paras'>Welcome to</p>
                  <h1 className='title'>Shopping </h1>
                  <p className='paras'>India's biggest online store for Mobiles, Fashion Clothes/Shoes, Electronics, Home Appliances, Books, Home, Furniture, Grocery, Jewelry, Sporting goods, ..</p>
                  <button className='button'> <NavLink to='/products'>Shop now </NavLink> </button>
               </div>
               <div className="section2">
                <img src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/05/14190804/e-commerce-.jpg" alt="" />
               </div>
          </div>
  )
}

export default Homeeheader