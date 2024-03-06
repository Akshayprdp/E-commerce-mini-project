import React from 'react'
import './Body.css'
import CLOTH from '../Body/CLOTH.jpg'
import WALLS from "../Body/WALLS.jpg"
import DRAPES from "../Body/DRAPES.jpg"
import BRAND from '../Body/BRAND.jpg'




function Body() {
  return (
    <div >
      <div className='div1'>
        <div className='div2'>
          <h2 className='Explore'>Explore</h2>
          <a href=""><img src={CLOTH} alt="" className='image1'/></a>
          <img src={WALLS} alt="" className='image2' />
        </div>
        <div className='div3'>
        <img src={BRAND} alt="" className='image3'/>
          <img src={DRAPES} alt="" className='image2'/>
        </div>
      </div>
        
      
    </div>
  )
}

export default Body
