import { Usefiltercontext } from "../Context/FilterProvider"
import Onegridproduct from "../MainComponenets/Onegridproduct"
import ListComponent from "./ListComponent"

const ProductList = ({elem}) => {
 const {isGrid} = Usefiltercontext()

  if(isGrid){
    return ( <Onegridproduct elem={elem}/>)
  }else{
      return(<ListComponent elem={elem}/>)
  }
 
}

export default ProductList