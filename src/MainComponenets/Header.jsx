import { useState } from 'react';
import '../Style.css/Header.css';
import { NavLink } from 'react-router-dom';
import { UseCartContext } from '../Context/CartProvider';


const Header = () => {
    const [display, setdisplay] = useState(true)
    const {total_item} = UseCartContext()
    const Change = ()=>{
            setdisplay(!display)
    }
 
  return (
       <>
         <div className="navbar-conainer">
           <div className="nav-logo">
            <img src="https://logos.textgiraffe.com/logos/logo-name/Shin-designstyle-boots-m.png" alt="" />
            </div>     
  
           <nav className='visible' >
            <ul className='navlist'>
              <li><NavLink to="/">Home</NavLink> </li>
                <li><NavLink to='/about'> About</NavLink></li>
                <li>  <NavLink to='/products'>Product</NavLink></li>
                <li> <NavLink to='/contact'> Contact</NavLink></li>
                <li className='carticon'> <NavLink to='/cart'> <i className="fa-solid fa-cart-shopping icon"></i> <span>{total_item}</span></NavLink></li>
            </ul>
           </nav>
              <div className="bar">
                <p style={{ display: display ? 'block' : 'none' }}> <i className="fa-solid fa-bars icon bars"  onClick={()=>Change()}></i> </p>
                <p  style={{ display: display ? 'none' : 'block' }}> <i className="fa-regular fa-circle-xmark icon cross" onClick={()=>Change()}></i> </p>
              </div>
       
         </div>
         <div style={{display:display?"none":"block"}} className="dropdown">
         <nav className='dropdown-list' >
            <ul >
                <li> <NavLink to="/">Home</NavLink> </li>
                <li> <NavLink to='/about'> About</NavLink></li>
                <li> <NavLink to='/products'>Product</NavLink></li>
                <li> <NavLink to='/contact'> Contact</NavLink></li>
                <li> <NavLink to='/cart'> <i className="fa-solid fa-cart-shopping icon"></i> <span>{total_item}</span></NavLink></li>
            </ul>
           </nav>
         </div>

       </>
  )
}

export default Header