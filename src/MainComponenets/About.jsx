import React from 'react'
import Homeeheader from './Homeeheader'
import '../Style.css/About.css'

const About = () => {
  return (
     <>
  <div className="aboutcontainer">
  
      <Homeeheader/>
      
        <div className="containerpara">
  
    <div className="aboutContent1">
      <div className="fifty">
      <h1 className='aboutoneheading'>Who We Are</h1>

      </div>
      <div className="fifty">
 
      <p className='text-sm'>We're independently owned, strategic creative agency-forever curious and ready to tranform the way business is done.</p>
      </div>
         


    </div>



    <div className="aboutContent2">
      <div className="about1 fifty">  
   <img src="https://www.inestweb.com/wp-content/uploads/2021/03/about-image.png" alt="" />

      </div>
      <div className="about2 fifty"> 
      <h1 className='about2heading'>OUR PEOPLE COME FIRST</h1>
<p className='text-sm'>Although we are well maintained company. The talent we cultivate gets the importance of honing their respective crafts. It helps to better serve both each other and our parteners, and it shows in everthing. - from what we design and produce, to what we value and believe.</p>
</div>

    </div>
          

        </div>

       
  </div>

     </>
  )  
}

export default About