import React from 'react'
import Alert from '../../ComponentsForUse/Alert'





function AlertApp() {
  return (
    <div className='container'>
        
        
        <Alert type={"success"} message={"A great Success"}/>
        <Alert type={"info"} message={"time trigered"} delay={true}/>
        
        
        
        </div>
  )
}

export default AlertApp