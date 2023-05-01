import React, { useState } from 'react';
import './DropdownKecamatan.css';


function DropdownKecamatan() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown-container">
      <div className='dropdown-kecamatan'>
        <button className="dropdown-button" onClick={handleDropdownClick}>
          <span className="dropdown-button-label">Pilih Kecamatan</span>
          <i className={isOpen ? "fa fa-caret-up" : "fa fa-caret-down"}></i>
        </button>
        {isOpen &&
          <div className="dropdown-menu-kecamatan">
            <a href="#">Tanete Riattang</a>
            <a href="#">Tanete Riattang Barat</a>
            <a href="#">Tanete Riattang Timur</a>
            <a href="#">Kajuara</a>
            <a href="#">Bengo</a>
            <a href="#">Cina</a>
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