import React from "react";
import kategoriPariwisata from "../config/Pariwisata/kategoriPariwisata.json";
import CardCategory from "../components/Card/CardCategory/Cardcategory";

const PariwisataCategory = () => {
    return (
        <div style={
            {
                display: 'flex',
                flexDirection: 'row',
            }
        }>
            {
                 kategoriPariwisata && kategoriPariwisata.map(item => {
                    return (
                        <CardCategory key={item.id} category={item}/>
                    )
                })
            }
           
             
        </div>
    )
}

export default PariwisataCategory;