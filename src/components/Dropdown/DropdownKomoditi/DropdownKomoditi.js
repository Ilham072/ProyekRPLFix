import React, { useState } from 'react';
import './DropdownKomoditi.css';


function DropdownKomoditi({selectedKomoditi, onKomoditiChange, komoditiOptions}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (value) => {
    const selectedValue = value;
    onKomoditiChange(selectedValue);
    setIsOpen(false);
  }

  return (
    <div className="dropdown-container-komoditi">
      <div className='dropdown-komoditi'>
        <button className="dropdown-button-komoditi" onClick={handleDropdownClick}>
          <span className="dropdown-button-label-komoditi">{selectedKomoditi || "Pilih Komoditi"}</span>
          <i className={isOpen ? "fa fa-caret-up" : "fa fa-caret-down"}></i>
        </button>
        {isOpen &&
          <div className="dropdown-menu-komoditi">
            {komoditiOptions.map(option => (
              <div key={option.value} onClick={() => handleOptionSelect(option.value)} value={option.value}>
                {option.label}
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
}

export default DropdownKomoditi;