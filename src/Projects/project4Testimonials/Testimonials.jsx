import React, {useState, useEffect} from 'react'
import Title from '../project1Esignature/Title'
import Buttons from '../../ComponentsForUse/Buttons'
import { BsFillFileEarmarkPostFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { BiCommentDetail } from 'react-icons/bi'

function Testimonials() {

const [testimonials, settestimonials] = useState()
const [items, setItems] = useState([])


useEffect(() => {
  const fetchData = async () => {
    if (testimonials) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${testimonials}`);
      const json = await response.json();
      setItems(json);
    }
  };
  fetchData();
}, [testimonials]);


  return (
    <div className='container'>
<Title text={"Testimonial app"}/> 

<Buttons text={"Posts"} btnClass = {"btn btn-warning"} icon ={<BsFillFileEarmarkPostFill />} onClick={()=> settestimonials("Posts")}/>
<Buttons text={"Users"} btnClass = {"btn btn-warning"} icon ={<FaUserAlt />} onClick={()=> settestimonials("Users")}/>
<Buttons text={"Comments"} btnClass = {"btn btn-warning"} icon ={<BiCommentDetail />} onClick={()=> settestimonials("Comments")}/>


<Title text={!testimonials ? "Select from above" : testimonials} />


{!items ? null : items.map( (item) => {
  return(
<div className='card card-primary mb-2' key={item.id}>{item.name && <h2 className='card-header'>{item.name}</h2>}
  <div className="card-body">
    <h4>{item.title}</h4>
    <p>{item.body}</p>
  </div>

  {item.email && (
    <small className='card-footer'>{item.email}</small>
  )}
</div>


  ) 
})}
    </div>
  )
}

export default Testimonials