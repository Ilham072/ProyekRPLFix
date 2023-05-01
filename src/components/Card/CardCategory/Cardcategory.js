import React from 'react';
import './CardCategory.css';

const CardCategory = (props) => {
    return (
        <div className="cardCategory">
            <a href="#">
                <div className="cardCategory-content">
                    <div>
                        <p id="sum">{props.category.count}</p>
                        <p id="title">{props.category.name}</p>
                    </div>
                    <div style={
                        {backgroundColor:props.category.bgColor}
                    } className="cardCategory-logo">
                        <img src={props.category.image}/>
                    </div>
                </div>
            </a>         
        </div>
    )
}

export default CardCategory;