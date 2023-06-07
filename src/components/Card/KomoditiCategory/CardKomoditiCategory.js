import React from 'react';
import "./CardKomoditiCategory.css"
import { Link } from 'react-router-dom';

const CardKomoditiCategory = ({sektor, image, url}) => {
    return (
        <div className="CardKomoditiCategory">
            <div className="CardKomoditiCategory-content">
                <div className="CardKomoditiCategory-logo">
                    <img src={image}/>
                </div>
                <div className="CardKomoditiCategory-title">
                    <p id="Sum-Category">{sektor.count}</p>
                    <p id="Title">{sektor.name}</p>
                </div>
                <Link to={url} className="CardKomoditiCategory-button">
                    <img src="assets/icon/button/Button2.svg"/>
                </Link>
            </div>
        </div>
    )
}

export default CardKomoditiCategory;