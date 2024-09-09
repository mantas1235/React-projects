import React from 'react'

import "./LockSlider.css"


function LockSlider({handleInput, sliderValue, width}) {

let sliderStyle = {
    appearance: "none",
    width:!width ? "300px" : width,
    height: "50px",
    background: "lightGray",
    outline: "none",
    borderRadius: "8px"
}



  return <input type="range" className='slider mb-2 border-' style={sliderStyle} onInput={handleInput} value={sliderValue}/>
}

export default LockSlider