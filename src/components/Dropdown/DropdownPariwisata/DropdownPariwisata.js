import React, { useState } from 'react';
import './DropdownPariwisata.css';

function DropdownPariwisata({ selectedWisata, onWisataChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  }

  const handleOptionSelect = (selectedValue) => {
    onWisataChange(selectedValue);
    setIsOpen(false);
  }

  const options = [
    { value: "Wisata Alam", label: "Wisata Alam" },
    { value: "Wisata Budaya", label: "Wisata Budaya" },
    { value: "Wisata Panorama", label: "Wisata Panorama" },
  ];

  return (
    <div className="dropdown-container-pariwisata">
      <div className='dropdown-pariwisata'>
        <button className="dropdown-button-pariwisata" onClick={handleDropdownClick}>
          <span className="dropdown-button-label-pariwisata">{selectedWisata || "Pilih Jenis Wisata"}</span>
          <i className={isOpen ? "fa fa-caret-up" : "fa fa-caret-down"}></i>
        </button>
        {isOpen &&
          <div className="dropdown-menu-pariwisata">
            {options.map(option => (
              <div key={option.value} onClick={() => handleOptionSelect(option.value)}>
                {option.label}
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
}

export default DropdownPariwisata;