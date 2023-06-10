import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DropdownTahun.css';


function DropdownTahun({selectedTahun, onTahunChange}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  }

  const handleOptionSelect = (selectedValue) => {
    onTahunChange(selectedValue);
    setIsOpen(false);
  }

  const years = [
      { value: 2023, label: 2023 },
      { value: 2022, label: 2022 },
      { value: 2021, label: 2021 },
      { value: 2020, label: 2020}
  ];

  return (
    <div className="dropdown-container-tahun">
      <div className='dropdown-tahun'>
        <button className="dropdown-button" onClick={handleDropdownClick}>
          <span className="dropdown-button-label">{selectedTahun || 'Tahun'}</span>
          <img className="dropdown-icon" src='assets/icon/button/buttonDropdown.png'/>
          <i className={isOpen ? "fa fa-caret-up" : "fa fa-caret-down"}></i>
        </button>
        {isOpen &&
          <div className="dropdown-menu-tahun">
            {years.map(year => (
              <div key={year.value} onClick={() => handleOptionSelect(year.value)}>
                {year.label}
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
}

export default DropdownTahun;