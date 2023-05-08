import React, { useState } from 'react';
import './DropdownSektor.css';


function DropdownSektor() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown-container">
      <div className='dropdown-sektor'>
        <button className="dropdown-button" onClick={handleDropdownClick}>
          <span className="dropdown-button-label">Pilih Sektor</span>
          <i className={isOpen ? "fa fa-caret-up" : "fa fa-caret-down"}></i>
        </button>
        {isOpen &&
          <div className="dropdown-menu-sektor">
            <a href="#">Pertanian</a>
            <a href="#">Peternakan</a>
            <a href="#">Perikanan</a>
            <a href="#">Perindustrian</a>
            <a href="#">Pariwisata</a>
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

export default DropdownSektor;