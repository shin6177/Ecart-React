import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { UseCartContext } from '../Context/CartProvider'
import PriceFormat from '../SideComponents/PriceFormat'
import '../Style.css/SingleProduct.css'
import Star from '../SideComponents/Star'
// import { Star } from '@mui/icons-material'
// import Testing from '../SideComponents/Testing'


const SingleProduct = () => {
  const {id} = useParams()
  const {addtoCart, getSingleProduct, SingleProduct}  = UseCartContext () 
  const {id:shin, name, price, reviews, description, stars, stock, image = [{url: ""}] , category, colors=[]} = SingleProduct


   const api = "https://api.pujakaitem.com/api/products"
   
   useEffect(()=>{
    getSingleProduct(`${api}?id=${id}`);
  }, [])
    
  
  const [imege, setimage] = useState(image[0])
  const [color, setcolors] = useState(colors[0])
  const [amount, setamount] = useState(1)
  

  const setIncrease = ()=>{
    setamount(amount+1)
    if(amount >= stock){
      setamount(stock)
    }
  }
 const setDecrease = () =>{
   setamount(amount-1)
   if(amount <= 1){
    setamount(1)
   }
 }

 
    
  return (
    <div className='singleProducts'>

       <div className="singleproductheader">
        <h1 className='Singleheading text-m'><NavLink to='/' >Home/</NavLink> {name}</h1>
         </div>

         <div className="singleprodcontainer flex">
          <div className="singleprod-left flex">
                  <div className="images-left">
                   { image.map((elem, id )=>{
                          return ( <img className='singlesmallimages' key={id} src={elem.url} onClick={()=>setimage(elem)}/> )
                        }) }
                  </div>
                  <div className="image-right">
                        <img className='singlebigimages' src={imege.url} alt="" />
                       
                    </div> 
          </div>
          <div className="singleprod-right">
            <h1 className='text-lg'>{name}</h1>
             
            <h2><span>   <Star  stars={stars}/>      </span> <span>({reviews} customer reviews)</span> </h2>
            <h3 className='text-sm'>MRP <del> <PriceFormat price={price + 250000}/> </del></h3>
            <h3 style={{color:"#6254F3"}} className='text-sm'> Deal of the Day: <PriceFormat price={price}/> </h3>
            <h1 className='singledescription'>{description}</h1>
          <div className="single-icon-container">
            <div className="singleicons"><i className="fa-solid fa-truck singleicon"></i>  <h2>Free Delivery</h2> </div>
            <div className="singleicons"><i className="fa-solid fa-arrow-rotate-left singleicon"></i> <h2>30 Days Replacement</h2> </div>
            <div className="singleicons"> <i className="fa-solid fa-truck singleicon"></i> <h2>Shin Delivered</h2> </div>
            <div className="singleicons"> <i className="fa-solid fa-shield-halved singleicon"></i> <h2>2 Year Warranty</h2> </div>
          </div>
          <div className='single-right-footer'>
            <p className='text-s'>Available: <strong> {stock>0?" In Stock":"Out of Stock"}</strong></p>
            <p className='text-s'>ID:  <strong>{shin}</strong> </p>
            <p className='text-s'>Brand:  <strong>  {category}   </strong> </p>
             {/* <Testing imgs={image}/> */}
          </div>
          <hr />
          <div className="Singleproduct-filter">
              <h1>Colors: {
                   colors.map((elem, i)=>{
                    return ( <button key={i} className='Singlecolor' style={{backgroundColor: elem}}  onClick={()=>setcolors(elem)}  > {color == elem?<i className="fa-solid fa-check"></i>:null}</button> )
                   })
                } </h1>
               <h1 className='numbers'>  <i className="fa-solid fa-plus counting" onClick={setIncrease} ></i> {amount}   <i className="fa-solid fa-minus counting" onClick={setDecrease}></i></h1>
             <NavLink to='/cart'><button className='cartbutton' onClick={()=>addtoCart(amount, color, shin, SingleProduct)} >ADD TO CART</button></NavLink>   
          </div>
          </div>
         </div>
         
    </div>
  )
}

export default SingleProduct