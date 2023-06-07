import React from "react";
import CardKomoditiCategory from "../components/Card/KomoditiCategory/CardKomoditiCategory.js";

const KomoditiCategory = ({sektor}) => {
    let i = 0;
    return (
        <div style={
            {
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                flexBasis: '30%', 
            }
        }>
            {
                sektor && sektor.map(item => {
                    i += 1
                    return (
                     <CardKomoditiCategory key={item.id} sektor={item} image={item.image} url={item.url}/>
                    ) 
                 })
            }
        </div>
    )
}

export default KomoditiCategory;