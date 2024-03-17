import React from 'react'
import pos from "../assets/aftermath-good.gif"
import neg from "../assets/aftermath-neg.gif"
import '../style/modal.css'; 

function Aftermath({code, show, onClose}) {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    console.log('Code: ', code)

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div><button className="exit-button" onClick={onClose}>X</button></div>
        {code? <img src={pos} alt=''/> : <img src={neg} alt=''/>}
     </section>
    </div>
  )
}

export default Aftermath