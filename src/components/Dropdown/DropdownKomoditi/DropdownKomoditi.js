import React, { useState, useEffect } from 'react';
import './DropdownKomoditi.css';
import axios from 'axios'


function DropdownKomoditi({selectedKomoditi, onKomoditiChange, komoditi="", pariwisata, bidang='', sektor, kecamatan='', kontenKomoditi=false}) {
  const [isOpen, setIsOpen] = useState(false);
  const [komoditiOptions, setKomoditiOptions] = useState([]);
  //const editData = JSON.parse(localStorage.getItem('editData'));

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (value) => {
    const selectedValue = value;
    onKomoditiChange(selectedValue);
    setIsOpen(false);
  }
  // useEffect(() => {
  //   if (!komoditiOptions) {
  //     setIsOpen(true);
  //   } else {
  //     setKomoditiList(komoditiOptions)
  //     setIsOpen(false);
  //   }
  // }, komoditiOptions);

  useEffect(() => {
    
    if (komoditi && !selectedKomoditi) {
      onKomoditiChange(komoditi);
    }
  }, [komoditi, selectedKomoditi]);

  const fetchKomoditi = async (sektor, bidang, kecamatan, kontenKomoditi=false) => {
    if (kecamatan) {
        try {
      const response = await axios.get(`http://localhost:8000/api/KomoditiBySektor?sektor=${sektor}&bidang=${bidang}&kecamatan=${kecamatan}`);
      const data = response.data;
      setKomoditiOptions(data);
        } catch (error) {
            console.log(error);
        }
    } else if (bidang) {
      try {
        const response = await axios.get(`http://localhost:8000/api/KomoditiBySektor?sektor=${sektor}&bidang=${bidang}`);
        const data = response.data;
        setKomoditiOptions(data);
          } catch (error) {
              console.log(error);
          }
    } else if (kontenKomoditi) {
      try {
        const response = await axios.get(`http://localhost:8000/api/KomoditiBySektor?sektor=${sektor}`);
        const data = response.data;
        setKomoditiOptions(data);
          } catch (error) {
              console.log(error);
          }
    } else if (sektor !== 'Pertanian' && sektor !== 'Pariwisata'){
      try {
        const response = await axios.get(`http://localhost:8000/api/KomoditiBySektor?sektor=${sektor}`);
        const data = response.data;
        setKomoditiOptions(data);
          } catch (error) {
              console.log(error);
          }
    }
    
  }

useEffect(() => {
    if (kecamatan){
      fetchKomoditi(sektor, bidang, kecamatan);
      setIsOpen(false)
    } else if(bidang) {
      fetchKomoditi(sektor, bidang)
    } else if(kontenKomoditi) {
      fetchKomoditi(sektor, bidang, kecamatan, kontenKomoditi=kontenKomoditi);
      setIsOpen(false);
    } else if (sektor !== 'Pertanian' && sektor !== 'Pariwisata') {
      fetchKomoditi(sektor);
      setIsOpen(false);
    }
    else {
      setIsOpen(true)
    }
}, [bidang, sektor, kecamatan, kontenKomoditi]);

const handleClick = (event) =>{
    console.log(event);
}

  return (
    <div className="dropdown-container-komoditi">
      <div className='dropdown-komoditi'>
        <button className="dropdown-button-komoditi" onClick={handleDropdownClick}>
          <span className="dropdown-button-label-komoditi">{selectedKomoditi ? selectedKomoditi : (pariwisata ? "Pilih Nama Wisata" : "Pilih Komoditi")}</span>
          <img className="dropdown-icon" src='assets/icon/button/buttonDropdown.png'/>
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