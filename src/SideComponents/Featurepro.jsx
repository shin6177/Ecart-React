import { NavLink } from 'react-router-dom'
import '../Style.css/Onegridproduct.css'
import PriceFormat from './PriceFormat'

const Featurepro = ({elem}) => {
    const {id, name, price, image, category} = elem

  return (

    <NavLink to={`/SingleProduct/${id}`}>
    <div className="card">
             <img src={image} alt="" />
             <div className="list">
                <h2>{name}</h2>
                <h2> <PriceFormat price={price}/>  </h2>
                <p className='catargory'>{category}</p>
             </div>
       </div>
       </NavLink> 
  )
}

export default Featurepro