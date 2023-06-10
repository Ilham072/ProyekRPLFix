import React from 'react';
import "./CardKomoditiCategory.css"
import { Link } from 'react-router-dom';

const CardKomoditiCategoryPusat = (props) => {
    return (
        <div className="CardKomoditiCategory">
            <div className="CardKomoditiCategory-content">
                <div className="CardKomoditiCategory-logo">
                    <img src={props.komoditi.image}/>
                </div>
                <div className="CardKomoditiCategory-title">
                    <p id="Sum-Category">{props.komoditi.count}</p>
                    <p id="Title">{props.komoditi.name}</p>
                </div>
                <Link to={props.komoditi.url} className="CardKomoditiCategory-button">
                    <img src="assets/icon/button/Button2.svg"/>
                </Link>
            </div>
        </div>
    )
}

export default CardKomoditiCategoryPusat;