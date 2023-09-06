import { UseCartContext } from '../Context/CartProvider'
import PriceFormat from '../SideComponents/PriceFormat'
import '../Style.css/Cart.css'


const Cart = () => {
   const {cart, clearcartitem,  total_price,total_item, shipping_fee, setincrease, setDecrease}   = UseCartContext()

let content;

 if(cart.length === 0){
    content = <div className='cartlengthzero'>
           <img src="https://www.gamkart.com/frontend/img/empty-cart.png" alt="" />
    </div>
 }else{
  content = <div className='mainCart'>
  <div className='cartmaincontainer'>
  <div className='cartcontainer'>
     <h1>Item</h1>
     <h1>Price</h1>
     <h1>Quantity</h1>
     <h1>Subtotal</h1>
     <h1>Remove</h1>
  </div>
  <hr className='line'/>

  
    {
       cart.map((elem, i)=>{
         const {amount, id, color, img, name, price} = elem
         return(
           <div key={i} className='cartcontainerproduct'>
          <div className='cartimage'> 
          <img src={img} alt={id} />
            <div className="cartimageContainer">
            <h1 className='text-ex'>{name}</h1>
              <div className='text-ex flex'>Color: <div className='cartimagecolor' style={{background:color}}></div> </div>
            </div>
            
            </div>
          <h1 className='priceproduct'>  <PriceFormat price={price}/> </h1>
          <h1 className='amountchanger'> <i className="fa-solid fa-plus counting "  onClick={()=>setincrease(id)}></i>{amount}<i className="fa-solid fa-minus counting" onClick={()=>setDecrease(id)}></i>  </h1>
          <h1 className='subtotal'>  <PriceFormat price={price*amount}/></h1>
          <h1 className='removebutton'> <i className="fa-solid fa-trash counting" onClick={()=>clearcartitem(id)}></i> </h1>
          </div>
        )
       })
    }
    
  

  </div>      
</div>

 }


    
  return (
<>
  <div className="entirecart">

 {content}

    <div className="Footercart">
         <h1>Total Item : {total_item}</h1>
         <h1>Shipping fee : <PriceFormat price={shipping_fee}/></h1>
         <h1>Total amount : <PriceFormat price={total_price + shipping_fee}/></h1>
       </div>
       </div>
</>
  )
}

export default Cart