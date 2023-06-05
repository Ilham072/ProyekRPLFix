import React, { useState, useEffect } from 'react';
import './DropdownBidang.css';


function DropdownBidang({ selectedBidang, onBidangChange, bidang=""}) {
  const [isOpen, setIsOpen] = useState(false);
  //const editData = JSON.parse(localStorage.getItem('editData'));

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  }

  const handleOptionSelect = (selectedValue) => {
    onBidangChange(selectedValue);
    setIsOpen(false);
  }

  useEffect(() => {
    
    if (bidang && !selectedBidang) {
      onBidangChange(bidang);
    }
  }, [bidang, selectedBidang]);

  const options = [
    { value: "Tanaman Pangan", label: "Tanaman Pangan" },
    { value: "Hortikultura", label: "Hortikultura" },
    { value: "Perkebunan", label: "Perkebunan" },
  ];

  return (
    <div className="dropdown-container-bidang">
      <div className='dropdown-bidang'>
        <button className="dropdown-button-bidang" onClick={handleDropdownClick}>
          <span className="dropdown-button-label-bidang">{selectedBidang || "Pilih Bidang"}</span>
          <img className="dropdown-icon" src='assets/icon/button/buttonDropdown.png'/>
          <i className={isOpen ? "fa fa-caret-up" : "fa fa-caret-down"}></i>
        </button>
        {isOpen &&
          <div className="dropdown-menu-bidang">
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

export default DropdownBidang;