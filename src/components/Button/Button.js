import React from "react";
import './Button.css'

const Button = (props) => {
    
    return(
        <div className="button">
            <button 
                className={props.className}
                onClick={props.onClick}
                src={props.src}
            >
               { props.children }
            </button>
        </div>
    )
}
export { Button };