import React, { useState } from 'react'
import Title from "../project1Esignature/Title"
import { FaRegSmileBeam } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";
import img from "./img/Golden-Retriever-Puppy.jpg"
function PhotoLike() {

const [like, setLike] = useState(false)
const [count, setCount] = useState(0)

const toggleLike =()=> {
if (!like) {
    setLike(true)
    setCount(count + 1)
}
else {
    setLike(false)
    setCount(count - 1)
}
}






  return (
  <div className='container'>
  <Title text= {"like photo app"}/>
  <Title text= {`Likes ${count}`}/>
  <div className="card card-dark m-auto shadow-md" style={{width: 300, cursor: 'pointer' }}>

<div className="card-header fs-xl ">
<FaRegSmileBeam className='me-2'/>
    <small>DoggyDog</small>
</div>
<img src={img} alt="img" style={{height: "fit-content"}} onDoubleClick={toggleLike}/>


<div className="card-footer fs-xl d-flex" style={{justifyContent: 'space-between'}}>
<FaRegComments />
 {like ? <AiFillHeart className='text-danger' onClick={toggleLike} />  : <CiHeart onClick={toggleLike} />}

</div>
  </div>
  





  </div>
  )
}

export default PhotoLike