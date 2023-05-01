import React from 'react';
import './Card.css';
const Card = (props) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.komoditi.image} alt={props.komoditi.name}/>
            </div>
            <div className="card-content">
                <span>{props.komoditi.name}</span>
                <a href="/KomoditiContent">
                    <button>
                        <img src="assets/icon/button/button1.png"/>
                        <a href="/KomoditiContent"></a>
                    </button>
                </a>
            </div>    
        </div>
    )
}
 
export default Card;