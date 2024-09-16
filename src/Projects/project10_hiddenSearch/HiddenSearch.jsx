import {useState, useEffect} from 'react'
import { BsSearch } from 'react-icons/bs'
function HiddenSearch() {

const [uiProps, setUiProps] = useState({
  bg: "purple",
  shadow: "",
  transition: "all .3s ease",
  opacity:0,
  showSearchicon: true,
  borderBottomColor: "#fff"
})


const body = document.body.style

    let inputStyle ={
        margin: "10vh 25vw",
        width: "20vh",
        height: "30px",
        padding: "1rem 3rem",
        border: "none",
        outline: "none",
        background: "transparent",
        borderBottom: `1px solid ${uiProps.borderBottomColor}`,
        fontSize: "1.3rem",
        color: "#eee",
        boxShadow: "0px 55px 60px -15px rgba(0,0,0,.75)",
        opacity: uiProps.opacity,
        transition: "all .3s ease"
    }
    
    
    
    let bsSearchStyle = {
        color:"#fff",
        fontSize:50,
        cursor: "pointer",
        position: "absolute",
        top: 20,
        right: 20
    }

useEffect(() => {
  body.background = uiProps.bg
  body.boxShadow = uiProps.shadow
  body.transition = uiProps.transition

}, [uiProps.shadow])


const showSearch = ()=> {
  setUiProps({
    opacity:1,
showSearchicon: false
  })
}


const handleSearchFocus = ()=> {
  setUiProps({
    shadow: "inset 0 -60vh 30vw 200px rgba(0,0,0,0.9)",
    borderBottomColor: "green"
  })
}

const handleSearchBlur = ()=> {
  setUiProps({
    shadow: "none",
    opacity: 0,
    borderBottomColor: "white",
    showSearchicon: true
  })
}

  return (
    <div className='container' style={{height: "100vh"}}>
        
        <input type="text" placeholder='Search' style={inputStyle} onFocus={handleSearchFocus} onBlur={handleSearchBlur}/>
       {uiProps.showSearchicon ? (<BsSearch style={bsSearchStyle}  onClick={showSearch} />) : null}
        </div>
  )
}

export default HiddenSearch