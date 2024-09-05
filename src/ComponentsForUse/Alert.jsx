import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"


function Alert({type, message, delay}) {

const [alert, setAlert] = useState(true)


const close = (e) => {
    e.target.parentElement.parentElement.classList.add("fadeAlert")

setTimeout(() => {
    setAlert(false)
}, 200);

}

useEffect(() => {
delay && setTimeout(() => {
    setAlert(false)
}, 2000);
}, [])


return alert && <div className={`alert alert-${type}`}>

<div className="alert-close d-flex" style={{justifyContent: "space-between"}}>
    <span>{message}</span>
    <Button className="btn-close" text={"X"} onClick={close}/>
</div>


</div>
}

export default Alert