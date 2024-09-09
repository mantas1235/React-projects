import React from 'react'
import Title from "../project1Esignature/Title"
import Buttons from '../../ComponentsForUse/Buttons'
import { useContext } from 'react'
import { ThemeContext } from './context/theme-context'

function Blog() {

const {theme,changeTheme} = useContext(ThemeContext)


  return (
    <div className='container p-1'><Title text={`My Blog with ${theme} Theme`} />
    <span style={{position: 'absolute', top:10, right: 10 }}>
<Buttons text={theme==="dark" ? "Light" : "Dark"}  btnClass={theme==="dark" ? "btn-light"  : "btn-dark"} onClick={changeTheme}/>

    </span>
    
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corrupti sapiente hic quas cumque saepe, tempore omnis magni fuga dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo non unde aliquid debitis totam, incidunt aliquam laborum corrupti error ratione!</p>

    </div>
  )
}

export default Blog