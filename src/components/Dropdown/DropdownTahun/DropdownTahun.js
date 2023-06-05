import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DropdownTahun.css';


function DropdownTahun() {
 
  return (
    <div className="dropdown-container-tahun">
      <div className='dropdown-tahun'>
        <button className="dropdown-button" >
          <span className="dropdown-button-label">Tahun</span>
          <img className="dropdown-icon" src='assets/icon/button/buttonDropdown.png'/>
          {/* <i className={isOpen ? "fa fa-caret-up" : "fa fa-caret-down"}></i> */}
        </button>
        {/* {isOpen &&
          <div className="dropdown-menu-tahun">
            {dataKecamatan.map(option => (
              <div key={option.kecamatan} onClick={() => handleOptionSelect(option.kecamatan)}>
                {option.kecamatan}
              </div>
            ))}
          </div>
        } */}
      </div>
    </div>
  );
}

export default DropdownTahun;