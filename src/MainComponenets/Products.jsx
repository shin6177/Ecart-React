import { Usefiltercontext } from "../Context/FilterProvider"
import { UseProductContext } from "../Context/ProductContext"
import '../Style.css/Products.css'
import ProductList from "../SideComponents/ProductList"
import PriceFormat from "../SideComponents/PriceFormat"

 const Products = () => {
const {filters:{text, maxprice, minprice, price}, filterProducts, changegrid, changelist, Optionchange, updatefilter, clearfilters} = Usefiltercontext()
   const {Product, isLoading, isError} = UseProductContext()
  

  const getUniqueData = (Data, str) =>{
     let newval = Data.map((elem)=>{
       return elem[str]
     })
      if(str === "colors"){
      newval = newval.flat()
      }
       return ["All",...new Set(newval)]
  }
   
 
const companies = getUniqueData(Product, "company")
const categories = getUniqueData(Product, "category")
const color = getUniqueData(Product, "colors")


let content;


    if(isLoading){
        content = <div className="isloadingimage"> <img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="" />  </div>
    }else if(isError){
      content = <div className="isloadingimage"> <img className="errorimage" src="https://media.giphy.com/avatars/404academy/kGwR3uDrUKPI.gif" alt="" /></div>
    }else{
       content =  <div className="products">
       <div className="product-container ">
        <div className="container-left">
          <form onSubmit={(e)=>e.preventDefault()} >
             <input type="text" name="text" value={text} placeholder="SEARCH" onChange={updatefilter} />
             </form>
                <div className="category-list topgap">
                <h1>Category</h1>
                {
                  categories.map((e, id)=>{
                    return( <button className="text-s category" name="category" key={id} value={e} onClick={updatefilter}>{e.toUpperCase()}</button> )
                  })
                }

                </div>

                <div className="companies-list topgap">
                  <h1>Company</h1>
                  <select className="text-s" name="company"  onChange={updatefilter}>
                  {
                      companies.map((e, id)=>{
                        return(   
                           <option className="text-s" key={id}  value={e}>{e.toUpperCase()}</option>
                        )
                      })
                  }
                   </select> 
                </div>
                <div className="colors-list topgap">
                  <h1>Colors</h1>
                  {
                 color.map((e, id)=>{
                  return( <button className="uni" style={{backgroundColor: e}} name="colors" value={e} key={id} onClick={updatefilter}></button> )
                 })
                  }
                </div>

                <div className="price-filter topgap">
                  <h1>Price</h1>
                  <h2>  <PriceFormat price={price}/>  </h2>
                  <input type="range" max={maxprice} name="price" min={minprice} value={price} onChange={updatefilter}/>
                </div>
             
              <div className="clearbutton topgap">
                <button className="clearfilters" onClick={clearfilters}>Clear Filters</button>
              </div>
        </div>
        <div className="container-right">
               <div className="right-cont-header flex">
                <div className="item1">
                <i className="fa-solid fa-table-cells-large icon" onClick={changelist}></i>
                <i className="fa-solid fa-list icon" onClick={changegrid}></i>
                </div>
                <div className="item2">
                  <h1>{filterProducts.length}: Products available</h1>
                </div>
                <div className="item3">
                    <select className="text-sm" name="" id="" onClick={Optionchange}>
                      <option className="text-sm" value="Lowest">Price(Lowest)</option>
                      <option  value="" disabled ></option>
                      <option className="text-sm" value="Highest">Price(Highest)</option>
                      <option value="" disabled ></option>
                      <option className="text-sm" value="a-z">Price(a-z)</option>
                      <option value="" disabled ></option>
                      <option className="text-sm" value="z-a">Price(z-a)</option>
                    </select>
                   </div>
                </div>          
                <div className="maincontainer">
                  
                            {
                              filterProducts.map((elem, id)=>{
                                return(<ProductList key={id} elem={elem}/> )
                              })
                            }
                </div>
        </div>
       </div>
     </div>
    }
 
 

    
       
   return (
      <>
        {content}
      </>    
  )
}

export default Products