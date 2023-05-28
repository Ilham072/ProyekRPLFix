import React, { useState, useEffect } from 'react';
import './DropdownKomoditi.css';


function DropdownKomoditi({selectedKomoditi, onKomoditiChange, komoditiOptions, komoditi="", pariwisata}) {
  const [isOpen, setIsOpen] = useState(false);
  //const editData = JSON.parse(localStorage.getItem('editData'));

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (value) => {
    const selectedValue = value;
    onKomoditiChange(selectedValue);
    setIsOpen(false);
  }
  useEffect(() => {
    if (!komoditiOptions) {
      setIsOpen(true);
    }
  }, komoditiOptions);

  useEffect(() => {
    
    if (komoditi && !selectedKomoditi) {
      onKomoditiChange(komoditi);
    }
  }, [komoditi, selectedKomoditi]);

  return (
    <div className="dropdown-container-komoditi">
      <div className='dropdown-komoditi'>
        <button className="dropdown-button-komoditi" onClick={handleDropdownClick}>
          <span className="dropdown-button-label-komoditi">{selectedKomoditi ? selectedKomoditi : (pariwisata ? "Pilih Nama Wisata" : "Pilih Komoditi")}</span>
          <i className={isOpen ? "fa fa-caret-up" : "fa fa-caret-down"}></i>
        </button>
        {isOpen &&
          <div className="dropdown-menu-komoditi">
            {komoditiOptions.map(option => (
              <div key={option.nama} onClick={() => handleOptionSelect(option.nama)} value={option.nama}>
                {option.nama}
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
}

export default DropdownKomoditi;