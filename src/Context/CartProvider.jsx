import { createContext, useContext, useEffect, useReducer } from "react"
import reducer from "../Reducer/CartReducer"
import axios from "axios"


const CartContext = createContext()

const getstorage = () =>{
  let localcart = localStorage.getItem("shincart")  
    if(localcart === []){
      return localcart = []
    }else{
         return JSON.parse(localcart)
    }
}



const initialstate = {
  IsLoading: false,
  SingleProduct: {},
  isError: false,
  cart:getstorage(),
  total_price: 0,
  total_item: 0,
  shipping_fee: 50000,
}


 
 



 getstorage()

const CartProvider = ({children}) => {
const addtoCart = (amount, color, shin, SingleProduct) =>{
     dispatch({type:"SET_CART_DATA", payload: {amount, color, shin, SingleProduct}})
}

 const setincrease = (id) =>{
    dispatch({type:"INCREASE_CART_ITEM", payload: id})
 }

  const setDecrease = (id) =>{
    dispatch({type:"DECREASE_CART_ITEM", payload: id})
  }
  const clearcartitem = (id) =>{
      dispatch({type:"CLEAR_CART_ITEM", payload: id})
  }



const getSingleProduct = async (url)=>{
    dispatch({type:"SET_LOADING"})
  try{
    const response = await axios.get(url)
    const SingleProduct = await response.data
     dispatch({type: "SET_SINGLE_PRODUCT", payload: SingleProduct})
  }
  catch(error){
       console.log(error)
       dispatch({type:"SET_SINGLE_ERROR"})
  }
}

const [state, dispatch] = useReducer(reducer, initialstate)

    


useEffect(()=>{
   dispatch({type:"SET_TOTAL_PRICEAMOUNT"})
   localStorage.setItem("shincart", JSON.stringify(state.cart)) 
}, [state.cart])


  return (
  <CartContext.Provider value={{...state, addtoCart, getSingleProduct, clearcartitem, setincrease,  setDecrease }}>  {children}  </CartContext.Provider>
 

  )
}

export const UseCartContext = ()=>{
      return  useContext(CartContext)
}

export default CartProvider