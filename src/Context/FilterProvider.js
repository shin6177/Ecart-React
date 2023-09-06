import React, { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from '../Reducer/FilterReducer'
import { UseProductContext } from './ProductContext'

const FilterContext = createContext()

const initialState = {
     filterProducts: [],
     allProducts: [],
     isGrid: true,
     sorting_value: "Lowest",
     filters:{
         text: "",
        category:"All",
        company:"All",
        colors:"All",
        minprice: 0,
        price: "",
        maxprice:"",
        options: ""    
     }   
  
}


const FilterProvider = ({children}) => {

  const {Product} = UseProductContext()
  const name = "shivam"
    



    const Optionchange = (e)=>{
    let event = e.target.value
      dispatch({type: "SORT_FILTER", payload: event})
    }
 
   
    const categorychange = (e) =>{
    dispatch({type:"CATEGORY_CHANGE", payload: e.target.textContent})
     
    } 
    

     
    const clearfilters = ()=>{
         dispatch({type: "CLEAR_ALL_FILTERS"})
    }

    const updatefilter = (e) =>{
         let name  = e.target.name;
         let value = e.target.value;
      return dispatch({type:"UPDATE_FILTER_PRODUCT", payload: {name, value}})  
    }

   const changegrid = ()=>{
     dispatch({type:"CHANGE_GRID"})
    }
   const changelist = ()=>{
    dispatch({type:"CHANGE_LIST"})
   }

const [state, dispatch] = useReducer(reducer, initialState)

useEffect(()=>{
  dispatch({type: "SORTING_VALUES"})
}, [state.sorting_value])

  useEffect(()=>{
    dispatch({type:"SET_UPDATE_FILTER", payload: Product})
  }, [state.filters, Product])


   useEffect(()=>{
          dispatch({type:"SET_FILTER_PRODUCT", payload: Product})
   }, [Product])



  return (
    <FilterContext.Provider value={{...state, name, changegrid, changelist, Optionchange, categorychange, updatefilter, clearfilters}}>{children}</FilterContext.Provider>
  )
}


export const Usefiltercontext = () => {
    return useContext(FilterContext)
}

export default FilterProvider