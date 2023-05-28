import React from 'react';
import kategoriPertanian from "../config/pertanian/kategoriPertanian.json"
import CardCategory from '../components/Card/CardCategory/Cardcategory';

const PertanianCategory = ({selectedCategory, onCategoryChange}) => {
    const handleCategorySelect = (category) => {
      onCategoryChange(category);
    };
  
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {kategoriPertanian &&
          kategoriPertanian.map((item) => {
            return (
              <CardCategory
                key={item.id}
                category={item}
                onClick={() => handleCategorySelect(item.name)}
              />
            );
          })}
      </div>
    );
  };
  
  export default PertanianCategory;
  