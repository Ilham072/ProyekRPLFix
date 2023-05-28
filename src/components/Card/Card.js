import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate();
    function kontenKomoditiHandler(navigate) {
        const kontenId = props.komoditi.id;
        navigate(`/KomoditiContent?id=${kontenId}`);
    }
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.komoditi.gambar} alt={props.komoditi.judul}/>
            </div>
            <div className="card-content">
                <span>{props.komoditi.judul}</span>
                <a>
                    <button onClick={() => kontenKomoditiHandler(navigate)}>
                        <img src="assets/icon/button/button1.png"/>
                    </button>
                </a>
            </div>    
        </div>
    )
}
 
export default Card;