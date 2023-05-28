import React, { useState, useEffect } from 'react';
import './DropdownSektor.css';

function DropdownSektor({ selectedSektor, onSektorChange, sektor, pariwisata=true }) {
  const [isOpen, setIsOpen] = useState(false);
  const editData = JSON.parse(localStorage.getItem('editData'));

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  }

  const handleOptionSelect = (selectedValue) => {
    onSektorChange(selectedValue);
    setIsOpen(false);
  }

  useEffect(() => {
    if (sektor && !selectedSektor) {
      onSektorChange(sektor);
    }
  }, [sektor, selectedSektor]);

  let options = [];

  if (pariwisata) {
    options = [
      { value: "Pertanian", label: "Pertanian" },
      { value: "Peternakan", label: "Peternakan" },
      { value: "Perikanan", label: "Perikanan" },
      { value: "Perindustrian", label: "Perindustrian"},
      { value: "Pariwisata", label: "Pariwisata"},
    ];
  } else {
    options = [
      { value: "Pertanian", label: "Pertanian" },
      { value: "Peternakan", label: "Peternakan" },
      { value: "Perikanan", label: "Perikanan" },
      { value: "Perindustrian", label: "Perindustrian"}
    ];
  }


  return (
    <div className="dropdown-container-sektor">
      <div className='dropdown-sektor'>
        <button className="dropdown-button-sektor" onClick={handleDropdownClick}>
          <span className="dropdown-button-label-sektor">{selectedSektor || "Pilih Sektor"}</span>
          <i className={isOpen ? "fa fa-caret-up" : "fa fa-caret-down"}></i>
        </button>
        {isOpen &&
          <div className="dropdown-menu-sektor">

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

export default DropdownSektor;