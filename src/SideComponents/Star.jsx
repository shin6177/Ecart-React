import React from 'react'

const Star = ({stars}) => {
   const ratingstar = Array.from({length:5}, (elem, index)=>{
      let number = index + 0.5;
        return(
           
             <span key={index}>
   {
     stars >= index + 1?   <i style={{color:"goldenrod"}} className="fa-solid fa-star"></i>:stars >= number ?   <i style={{color:"goldenrod"}} className="fa-solid fa-star-half-stroke"></i>: <i  style={{color:"goldenrod"}} className="fa-regular fa-star"></i>
   }

             </span>
           
         
        )
   })

  return (
    <>
          {ratingstar }
    </>
  )
}

export default Star