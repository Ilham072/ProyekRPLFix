import React from "react";
import kategoriKomoditi from "../config/KomoditiCategory/kategori_Komoditi.json";
import CardKomoditiCategory from "../components/Card/KomoditiCategory/CardKomoditiCategory.js";

const KomoditiCategory = () => {
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
                kategoriKomoditi && kategoriKomoditi.map(item => {
                    return (
                     <CardKomoditiCategory key={item.id} komoditi={item}/>
                    ) 
                 })
            }
        </div>
    )
}

export default KomoditiCategory;