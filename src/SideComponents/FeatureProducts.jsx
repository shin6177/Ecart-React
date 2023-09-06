import { UseProductContext } from '../Context/ProductContext'
import '../Style.css/FeatureProducts.css'
import Featurepro from './Featurepro'

const FeatureProducts = () => {
 const {featureProducts} = UseProductContext()
  //  console.log(featureProducts)
  
  return (
        <>
        <div className="feature-container">
           <div className="container-fea">

         
            <p className='text-s'>Check now</p>
            <h1 className='text-lg'>Our Feature Services </h1>
            <div className="cards">
            {
                featureProducts.map((elem, id)=>{
                  return( <Featurepro key={id} elem={elem}/>)
                })
               }
            </div>
            </div>
        </div>
        </>
  )
}

export default FeatureProducts