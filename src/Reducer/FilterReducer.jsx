const FilterReducer = (state, action) => {
      switch(action.type){

        
            case "SET_FILTER_PRODUCT":
              let alldata = [...action.payload]
             
                  let maxprice = () =>{
                  let jis = alldata.map((elem)=> elem.price)
                    return Math.max(...jis)
                }
                 
             let maxi =  maxprice()

                return{
                    ...state,
                    filterProducts: [...action.payload],
                    allProducts: [...action.payload],
                    filters:{
                        ...state.filters,
                        maxprice: maxi
                    }
                }





              case "CHANGE_GRID":
                return{
                    ...state,
                    isGrid: false,
                }
            case "CHANGE_LIST":
            return{
                ...state,
                isGrid:true,
            }    
            case "SORT_FILTER":
            return{
                ...state,
                sorting_value: action.payload,
            }
            case "UPDATE_FILTER_PRODUCT":
                const {name, value} = action.payload
                //   console.log(name, value)
                return{
                    ...state,
                    filters:{
                        ...state.filters,
                        [name]: value
                    }         
                }


            case "SET_UPDATE_FILTER":
            const {text, category,company, colors, price} = state.filters
            let temp = [...action.payload]
                //   console.log(temp)
            if(text){
                temp = temp.filter((elem)=>{
                    return elem.name.toLowerCase().includes(text)
                })
             }
             if(category !== "All"){ 
                temp =  temp.filter((elem)=>{
                    return elem.category === category
                })
                // console.log(temp)
             }
            
             if(company !== "All"){
               temp = temp.filter((elem)=>{
                return elem.company === company
               })
             }
            if(colors !== "All"){
                temp = temp.filter((elem)=>{
                    return elem.colors.includes(colors)
                })
            } 
            if(price){
                temp = temp.filter((elem)=>{
                    return elem.price <= Number(price)
                })
            }

                return{
                  ...state,
                  filterProducts: temp
                }
           

           case "SORTING_VALUES":
                let udpatedcart = [...state.filterProducts]
                let newval = state.sorting_value;
           if(newval === "Lowest"){
              udpatedcart = udpatedcart.slice().sort((a,b)=>a.price - b.price)
           }
           if(newval === "Highest"){
              udpatedcart = udpatedcart.slice().sort((a,b)=>b.price - a.price)
           }
           if(newval === "a-z"){
            udpatedcart = udpatedcart.slice().sort((a,b)=> a.name.localeCompare(b.name))
           }
           if(newval === "z-a"){
            udpatedcart = udpatedcart.slice().sort((a,b)=> b.name.localeCompare(a.name))
           }
                return{
                    ...state,
                    filterProducts: udpatedcart
                }
            
        case "CLEAR_ALL_FILTERS":
            return{
                ...state,
                filters:{
                    ...state.filters,
                    text: "",
                   category:"All",
                   company:"All",
                   colors:"All",
                   minprice: 0,
                   price: state.filters.maxprice ,
                   maxprice: state.filters.maxprice,
                }   
            }


      }
}

export default FilterReducer