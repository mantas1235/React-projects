import { useState } from "react"
import Title from "./Title"



const Esignature = () => {
    const [tekstas, setTekstas] = useState("")
    const [data, setDate] = useState("")
    
    
    const inputChangeHandler = (e)=> {
    
    setTekstas(e.target.value)
    
    }
    
    
    const dataChangeHandler = (e)=> {
    
      setDate(e.target.value)
      
      }
    
    
      return (
        <div className="App">
    <Title text={tekstas} />
    <Title text={data} />
    
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consectetur dolores nesciunt sed exercitationem distinctio tempore magnam veritatis dolor vel!</p>
    
    
    <input type="date" value={data} onChange={dataChangeHandler}   />
    <input type="text" value={tekstas} placeholder='Ener your name' onChange={inputChangeHandler}/>
    
    
        </div>
      );

}


export default Esignature