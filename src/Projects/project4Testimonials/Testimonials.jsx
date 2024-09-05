import React from 'react'
import { useState,useEffect } from 'react'
import Buttons from "../../ComponentsForUse/Buttons"
import Title from '../project1Esignature/Title'





function Testimonials() {


    const [testimonials, setTestimonials] = useState("")
    const [items, setItems] = useState("")

 


useEffect(() => {
fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
.then(response => response.json())
.then(data => setItems(data))
}, [testimonials])
    
  return (
    <div className='container'>

<Title text={"Testimonials app"}/>


<div className='d-flex' style={{gap:10}}>
<Buttons btnClass="btn-success" text={"Posts"} onClick={()=> setTestimonials("Posts")}/>
<Buttons btnClass="btn-success" text={"users"} onClick={()=> setTestimonials("Users")}/>
<Buttons btnClass="btn-success" text={"Comments"} onClick={()=> setTestimonials("Comments")}/>


</div>

<Title classes={"subtitle text-primary"} text={!testimonials ? "Select from above" : testimonials} />

{!items ? null
 : items.map((item)=> {
    return <div className="card card-primary mb-2" key={item.id}>
        
        
        {item.name && <h2 className='card-header'>{item.name}</h2>}
        <div className="card-body">
            <h4>{item.title}</h4>
            <p>{item.body}</p>
        </div>
        {item.email && (
            <small className='card-footer'>{items.email}</small>
        )}
        
        </div>
})}


    </div>
  )
}

export default Testimonials