import React, { useState } from 'react';
import './DropdownKomoditi.css';


function DropdownKomoditi() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown-container-komoditi">
      <div className='dropdown-komoditi'>
        <button className="dropdown-button-komoditi" onClick={handleDropdownClick}>
          <span className="dropdown-button-label-komoditi">Pilih Komoditi</span>
          <i className={isOpen ? "fa fa-caret-up" : "fa fa-caret-down"}></i>
        </button>
        {isOpen &&
          <div className="dropdown-menu-komoditi">
            <a href="#">Tanete Riattang</a>
            <a href="#">Tanete Riattang Barat</a>
            <a href="#">Tanete Riattang Timur</a>
            <a href="#">Kajuara</a>
            <a href="#">Bengo</a>
            <a href="#">Cina</a>
          </div>
        }
      </div>
      
    </div>
  );
}

export default DropdownKomoditi;