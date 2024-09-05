function Buttons({ btnClass, text = "click", icon, onClick}) {
  return (
    <button className={`btn ${btnClass} btn-sm`} onClick={onClick} style={{backgroundColor:"red"}}>
      {icon}
      {text}
    </button>
  );
}

export default Buttons;
