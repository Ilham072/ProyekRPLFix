import React, { useState, useEffect } from 'react';
import './DropdownKecamatan.css';


function DropdownKecamatan({selectedKecamatan, onKecamatanChange, kecamatan}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  }

  const handleOptionSelect = (selectedValue) => {
    onKecamatanChange(selectedValue);
    setIsOpen(false);
  }

  useEffect(() => {
    if (kecamatan && !selectedKecamatan) {
      onKecamatanChange(kecamatan);
    }
  }, [kecamatan, selectedKecamatan]);

  const options = [
    {value: "Tanete Riattang", label: "Tanete Riattang"},
    {value: "Bambonge", label: "Bambonge"},
    {value: "Bengo", label: "Bengo"},
  ];

  return (
    <div className="dropdown-container">
      <div className='dropdown-kecamatan'>
        <button className="dropdown-button" onClick={handleDropdownClick}>
          <span className="dropdown-button-label">{selectedKecamatan || "Pilih Kecamatan"}</span>
          <i className={isOpen ? "fa fa-caret-up" : "fa fa-caret-down"}></i>
        </button>
        {isOpen &&
          <div className="dropdown-menu-kecamatan">
            {options.map(option => (
              <div key={option.value} onClick={() => handleOptionSelect(option.label)}>
                {option.label}
              </div>
            ))}
          </div>
        }
      </div>
      
      <div className="cari-btn">
          <button className='cariButton'>
                Cari
          </button>
      </div>
    </div>
  );
}

export default DropdownKecamatan;