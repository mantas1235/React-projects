import React, { useState } from 'react'
import Buttons from '../../ComponentsForUse/Buttons'


function TemperatureControler() {

const [temperature, setTemperature] = useState(0)


const HandleTemp = () => { 
    
    setTemperature(temperature + 1 )
}

const MinusTemp = ()=> {
setTemperature(temperature - 1)
}


  return (
    <div className='container mt-3 text-center'>
<div className="card bg-light m-auto" style={{width:300 , display:"flex", alignItems:"center"}}>
    <h1 className={`card border-50 ${temperature>0 ? "bg-danger" : "bg-info"}`} style={{height: 150, width: 150, border:"2px solid #666", borderRadius:"50%", fontSize:24 , display:"flex", justifyContent:"center"}}>{`${temperature} C`}</h1>

    
</div>

<Buttons text='+' btnClass = {"btn-lg bg-danger "} onClick={HandleTemp}/>
<Buttons text='-' btnClass = {"btn-lg bg-primary m-3"} onClick={MinusTemp}/>

<div className="d-flex my-2">

</div>


    </div>
  )
}

export default TemperatureControler