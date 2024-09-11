
import React from 'react'

function Slider({setValue, handleValue, textColor,bgColor}) {
const sliderStyle = {
    appearance: "none",
    width: "100%",
    height: 25,
    courser: "pointer",
    opacity: 0.7,
    background: "lightgrey"
}
    
  return (
    <div className='container d-flex flex-column' style={{gap:100}}>
<input type="range" min="0" max={100} value={setValue} onInput={handleValue} style={sliderStyle}/>
<div style={{
    color: !textColor ? "black" : textColor,
    height: `${setValue*3}px`,
    width: `${setValue*3}px`,
    background: !bgColor ? "lightgray" : bgColor,
    display: "flex",
    alignItems: "center",
    justifyContent:"center",
    borderRadius: "50%"


}}>
    
    <span>{setValue}</span>
</div>


    </div>
  )
}

export default Slider