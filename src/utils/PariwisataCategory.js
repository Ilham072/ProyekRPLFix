import React from "react";
import kategoriPariwisata from "../config/Pariwisata/kategoriPariwisata.json";
import CardCategory from "../components/Card/CardCategory/Cardcategory";

const PariwisataCategory = ({selectedCategory, onCategoryChange, kategoriPariwisata}) => {
    const handleCategorySelect = (category) => {
        onCategoryChange(category);
    };
    
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
                        <CardCategory key={item.id} category={item} onClick={() => handleCategorySelect(item.name)}/>
                    )
                })
            }
           
             
        </div>
    )
}

export default PariwisataCategory;