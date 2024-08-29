import React from 'react'
import Title from '../project1Esignature/Title'



export default function RandomColors() {


function handleClick(ev) {
    let body = document.querySelector("body")
    body.style.backgroundColor = GetRandomColor()
    ev.target.style.backgroundColor = GetRandomColor() 


}



function GetRandomColor() {
    const letters = "0123456789ABCDEF"
let color = "#"
    for (let i = 0; i < 6; i++) {
        color+=letters[Math.floor(Math.random() * 16)]
        
    }
    return color
}


  return (
    <>
<Title text={"randomColors"}/>
<button className='btn btn-danger mt-5 ' onClick={handleClick}>Click me</button>
<button className='btn btn-warning mt-5' onClick={handleClick}>And me</button>
<button className='btn btn-primary mt-5' onClick={handleClick}>Me too</button>
<button className='btn btn-success mt-5' onClick={handleClick}>me also</button>
    </>
  )

}
