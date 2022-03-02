import React from 'react'

function Butoon(props) {
  return (
    <div  onClick= {props.onClick}
    style={{
        backgroundColor: props.color,
        width: props.width,
        padding: "5px",
        margin: "10px",
        cursor: "pointer",
        borderraduius: props.radius,
        color: props.txtcolor

    }}>
        
        {props.text} 
        </div>

  )
}

export default Butoon