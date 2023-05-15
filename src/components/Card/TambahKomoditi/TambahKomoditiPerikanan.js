import { useState } from 'react';
import { Col } from 'react-bootstrap';
import "./TambahKomoditi.css";

const TambahKomoditiPerikanan= () => {

  const [popupStyle, showPopup] = useState("hide")

  const popup =()=>{
      showPopup("Tambah-popup")
      setTimeout(()=> showPopup("hide"),3000)
  }

  return (
    <Col className="tambah-komoditi-perikanan">
      <div className="cover-tambah-komoditi-2">
        <h1>Tambah Komoditi</h1>
        <h3>Nama Komoditi</h3>
        <input type="text"/>
        <div className="tambah-btn" onClick={popup}>Simpan</div>
      </div>
    </Col>
  );
}

export default TambahKomoditiPerikanan;
