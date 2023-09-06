const CartReducer = (state, action) => {
  switch(action.type){

    case "SET_CART_DATA":
        let  {amount, color, shin, SingleProduct} = action.payload
        
         let existingproduct = state.cart.find((elem)=> elem.id === shin + color)
         if(existingproduct){
            console.log("mil gyi id")
              let updatecart = state.cart.map((elem)=>{
                  if(elem.id === shin + color){
                       let newamount = elem.amount + amount
                       if(newamount >= elem.max){
                           newamount = elem.max
                       }
                      return{
                        ...elem,
                        amount: newamount
                      }
                      
                  }else{
                    return{
                        ...elem
                    }
                  }
              }) 
              return{
                ...state,
                cart: updatecart
              } 
              
          } 
      let  cartProduct = {
           id: shin + color,
         amount: amount,
        color: color,
        name: SingleProduct.name,
        price: SingleProduct.price,
        img: SingleProduct.image[0].url,
        max: SingleProduct.stock,
        totalpri: SingleProduct.price*amount
}
        return{
            ...state,
            cart: [...state.cart, cartProduct]
}

   case "SET_SINGLE_PRODUCT":
    return{
        ...state,
        IsLoading: false,
        SingleProduct: action.payload,
       }
   case "SET_LOADING":
    return{
        ...state,
        IsLoading: true,
    }  
   
    case "SET_SINGLE_ERROR":
        return{
            ...state,
            isError: true,
        }


   case "INCREASE_CART_ITEM":
    let newcart = state.cart.find((elem)=> elem.id === action.payload)
       if(newcart){
        let uptcart = state.cart.map((elem)=>{
                if(elem.amount === elem.max){
                      return {
                           ...elem,
                           amount: elem.max
                      }
                }else{
                     let newamnt =  elem.amount + 1
                     return{
                        ...elem,
                        amount: newamnt
                     }}
        })
        return{
            ...state,
            cart: uptcart
        }}

    case "DECREASE_CART_ITEM":
        let necart = state.cart.find((elem)=> elem.id === action.payload)
        if(necart){
         let uptcart = state.cart.map((elem)=>{
                 if(elem.amount === 1){
                       return {
                            ...elem,
                            amount: 1
                       }
                 }else{
                      let newamnt =  elem.amount - 1
                      return{
                         ...elem,
                         amount: newamnt
                      }}
         })
         return{
             ...state,
             cart: uptcart
         }}


   case "SET_TOTAL_PRICEAMOUNT":
    const  {total_item, total_price} = state.cart.reduce((accumulator, currentval)=>{
        let {amount, price} = currentval
        accumulator.total_item += amount
        accumulator.total_price += amount*price
        return accumulator
    },
     {
        total_item:0,
        total_price:0
     }
    )
    return{
        ...state,
        total_item,
        total_price
    }
    
    
    
    
case "CLEAR_CART_ITEM":
    let updatedcart = [...state.cart]
      let id = action.payload;
       updatedcart = updatedcart.filter((elem)=>{
         return elem.id  !==  id
       })
    return{
        ...state,
       cart: updatedcart
    }}}

export default CartReducer