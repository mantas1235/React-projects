import Slider from './Slider'
import Title from "../project1Esignature/Title"

import { useState } from 'react'


function SlideToGrow() {

const [slideValue, setSlideValue] = useState(0)

const handleSliderValueChange = (e) => {
setSlideValue(e.target.value)
console.log(slideValue);

}

let bgColor;
let textColor;

if (slideValue < 25) {
    bgColor = "red"
    textColor = "white"
}
if (slideValue > 25 && slideValue <=50) {
    bgColor = "blue"
}
if (slideValue > 50 && slideValue <=75) {
    bgColor = "green"
    textColor = "red"
}
if (slideValue > 76) {
    bgColor = "orange"
    textColor = "white"

}
if (slideValue == 100) {
    bgColor = "red"
}

  return (
  
    <div className='container text-center'>
  <Title text={"Slider app"}/>
        <Slider setValue={slideValue} handleValue={handleSliderValueChange} bgColor={bgColor} textColor={textColor}/>
        
        </div>
  )
}

export default SlideToGrow