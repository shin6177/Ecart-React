import { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from '../Reducer/ProductReducer'
 


const ProductContext = createContext()

const initialstate ={
              Product: [],
              featureProducts:[],
              isLoading: false,
              isError: false,
              SingleProducts: ""
}


const ProductProvider = ({children}) => {
    const API = "https://api.pujakaitem.com/api/products"
    const GetData = async (url)=>{
             dispatch({type:"IS_lOADING"})
       try {
          const res =await fetch(url)
          const data = await res.json()
           dispatch({type:"GET_PRODUCTS", payload: data})

        }catch(error){
              console.log("error")
              dispatch("IS_ERROR")
        }
    }

 useEffect(()=>{
   GetData(API)
 }, [])


 
const [state, dispatch] = useReducer(reducer, initialstate)

  return (
     <ProductContext.Provider value={{ ...state}}>{children}</ProductContext.Provider>
  )
}


export const UseProductContext = ()=>{
      return useContext(ProductContext)
}


export default ProductProvider