import React, { useState } from 'react';
import './DropdownBidang.css';


function DropdownBidang() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown-container-bidang">
      <div className='dropdown-bidang'>
        <button className="dropdown-button-bidang" onClick={handleDropdownClick}>
          <span className="dropdown-button-label-bidang">Pilih Bidang</span>
          <i className={isOpen ? "fa fa-caret-up" : "fa fa-caret-down"}></i>
        </button>
        {isOpen &&
          <div className="dropdown-menu-bidang">
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

export default DropdownBidang;