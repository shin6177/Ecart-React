const ProductReducer = (state, action) => {
   switch(action.type){
      case "IS_lOADING":
        return{
            ...state,
            isLoading: true
        }
       case "IS_ERROR":
        return{
            ...state,
            isError: true,
        }
       
      case "GET_PRODUCTS":
         let alldata = [...action.payload]
        let feature = alldata.filter((elem)=>{
            return elem.featured
        })         
        return{
            ...state,
            Product: action.payload,
            featureProducts: feature,
            isLoading: false,
            isError: false
        }


   }  
}

export default ProductReducer