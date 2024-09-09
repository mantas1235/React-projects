function Buttons({ btnClass, text = "click", icon, onClick, background, colorBtn}) {
  return (
    <button className={`btn ${btnClass} btn-sm`} onClick={onClick} style={{backgroundColor:background, color:colorBtn}}>
      {icon}
      {text}
    </button>
  );
}

export default Buttons;
