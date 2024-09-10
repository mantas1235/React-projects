import React from 'react'
import LockSlider from './LockSlider'
import { AiFillUnlock } from 'react-icons/ai'
import { useState } from 'react'
import LockScreenImg from './img/img_0002s_0001_lost-valley-2.jpg'
import HomeScreenImg from './img/img_0003s_0000_marvel-1.jpg'







function SlideToUnlock() {


    const [uiProps, setUiProps] = useState({
        uiText: 'unlock screen',
        uiColor: '#000 ',
        uiBg: `url(${LockScreenImg}) center/cover`
    })

const [showLockSlider, setShowLockSlider] = useState(true)
const [lockSliderValue, setLockSliderValue] = useState(0)


const handleLockSlider = (e) => {
setLockSliderValue(e.target.value)
console.log(e.target.value);
setShowLockSlider(false)
}


  return (
    <div className='container text-center d-flex flex-column border-20' style={{
        height: "90vh",
        marginTop: "10vh",
        width: 280,
        border: "4px, solid #000",
background: uiProps.uiBg,
    }}>
        
        <h1 className='title' style={{color: uiProps.uiColor}}>{uiProps.uiText}</h1>

{
    showLockSlider ? (<LockSlider handleInput={handleLockSlider} value={lockSliderValue} width={"250px"} />) : (<AiFillUnlock className='unlockIcon' />)
}

        
        
        
        
        </div>
  )
}

export default SlideToUnlock