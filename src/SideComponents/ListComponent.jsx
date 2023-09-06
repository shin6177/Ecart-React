import { NavLink } from 'react-router-dom'
import '../Style.css/ListComponent.css'
import PriceFormat from './PriceFormat'

const ListComponent = ({elem}) => {
    const{id,description,name, image, price} = elem
    //  console.log(elem)
  return (
    <div className='listcomponent'>
                <div className="listimage">
                    <img src={image} alt={image} />
                </div>
                <div className="listparas">
                      <h1 className='listparasname text-m'>{name.toUpperCase()}</h1>
                      <h2 className='listparasprice'> <PriceFormat price={price}/>  </h2>
                      <p className='listparasdesc text-sm'>{description.slice(0,130)}</p>

                       <NavLink to={`/SingleProduct/${id}`}> <button className='listparasbutton'>Read More</button></NavLink>
                </div>
    </div>
  )
}

export default ListComponent