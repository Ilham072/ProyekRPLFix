import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DropdownKecamatanV2.css';


function DropdownKecamatan({selectedKecamatan, onKecamatanChange, kecamatan}) {
  const [isOpen, setIsOpen] = useState(false);
  const [dataKecamatan, setDataKecamatan] = useState([]);
  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  }

  const handleOptionSelect = (selectedValue) => {
    onKecamatanChange(selectedValue);
    setIsOpen(false);
  }

  useEffect(() => {
    async function fetchDataKecamatan() {
      let data;
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Kecamatan`);
      data = response.data;
      setDataKecamatan(data);
    }
    fetchDataKecamatan();
  }, []);

  useEffect(() => {
    if (kecamatan && !selectedKecamatan) {
      onKecamatanChange(kecamatan);
    }
  }, [kecamatan, selectedKecamatan]);
  
  return (
    <div className="dropdown-container-V2">
      <div className='dropdown-kecamatan-V2'>
        <button className="dropdown-button" onClick={handleDropdownClick}>
          <span className="dropdown-button-label">{selectedKecamatan || "Pilih Kecamatan"}</span>
          <img className="dropdown-icon" src='assets/icon/button/buttonDropdown.png'/>
          <i className={isOpen ? "fa fa-caret-up" : "fa fa-caret-down"}></i>
        </button>
        {isOpen &&
          <div className="dropdown-menu-kecamatan">
            {dataKecamatan.map(option => (
              <div key={option.kecamatan} onClick={() => handleOptionSelect(option.kecamatan)}>
                {option.kecamatan}
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
}

export default DropdownKecamatan;