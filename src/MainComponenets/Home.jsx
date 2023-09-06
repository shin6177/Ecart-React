import React from 'react'
import '../Style.css/Home.css'
import { UseProductContext } from '../Context/ProductContext'
import FeatureProducts from '../SideComponents/FeatureProducts'
import Trusted from '../SideComponents/Trusted'
import Homeeheader from './Homeeheader'

const Home = () => {
  const { isLoading, Product, featureProducts} = UseProductContext()
  
  return (
    <div className='Home'>

         <Homeeheader/>
          <FeatureProducts/>
          <Trusted/>
    </div>
  )
}

export default Home