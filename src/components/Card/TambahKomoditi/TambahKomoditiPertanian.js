import { useState } from 'react';
import { Col } from 'react-bootstrap';
import "./TambahKomoditi.css";

const TambahKomoditiPertanian= () => {
  const [selectedBidangKomoditi, setSelectedBidangKomoditi] = useState("");

  const handleBidangKomoditiChange = (event) => {
    setSelectedBidangKomoditi(event.target.value);
  }

  const [popupStyle, showPopup] = useState("hide")

  const popup =()=>{
      showPopup("Tambah-popup")
      setTimeout(()=> showPopup("hide"),3000)
  }

  return (
    <Col className="tambah-komoditi-pertanian">
      <div className="cover-tambah-komoditi">
        <h1>Tambah Komoditi</h1>
        <h3>Nama Komoditi</h3>
        <input type="text"/>
        <h3>Bidang Komoditi</h3>
        <select value={selectedBidangKomoditi} onChange={handleBidangKomoditiChange}>
          <option value="Tanaman Pangan">Tanaman Pangan</option>
          <option value="Hortikultura">Hortikultura</option>
          <option value="Perkebunan">Perkebunan</option>
        </select>
        <div className="tambah-btn" onClick={popup}>Simpan</div>
      </div>
    </Col>
  );
}

export default TambahKomoditiPertanian;
