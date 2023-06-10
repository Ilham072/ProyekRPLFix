import React from "react";
import kategoriKomoditiPusat from "../config/KomoditiCategory/kategori_KomoditiPusat.json";
import CardKomoditiCategoryPusat from "../components/Card/KomoditiCategory/CardKomoditiCategoryPusat";

const KomoditiCategoryPusat = () => {
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
                kategoriKomoditiPusat && kategoriKomoditiPusat.map(item => {
                    return (
                     <CardKomoditiCategoryPusat key={item.id} komoditi={item}/>
                    ) 
                 })
            }
        </div>
    )
}

export default KomoditiCategoryPusat;