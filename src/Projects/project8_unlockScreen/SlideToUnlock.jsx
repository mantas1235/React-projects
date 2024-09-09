import React from 'react'
import LockSlider from './LockSlider'
import { AiFillUnlock } from 'react-icons/ai'
import { useState } from 'react'







function SlideToUnlock() {

const [showLockSlider, setShowLockSlider] = useState(true)



  return (
    <div className='container text-center d-flex flex-column border-20' style={{
        height: "90vh",
        marginTop: "10vh",
        width: 280,
        border: "4px, solid #000"

    }}>
        
        <h1 className='title'>Title</h1>

{
    showLockSlider ? (<LockSlider width={"250px"} />) : (<AiFillUnlock className='unlockIcon' />)
}

        
        
        
        
        </div>
  )
}

export default SlideToUnlock