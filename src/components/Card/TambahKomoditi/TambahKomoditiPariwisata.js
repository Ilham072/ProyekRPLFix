import { useState } from 'react';
import { Col } from 'react-bootstrap';
import "./TambahKomoditi.css";

const TambahKomoditiPariwisata= () => {
  const [selectedJenisWisata, setSelectedJenisWisata] = useState("");

  const handleJenisWisataChange = (event) => {
    setSelectedJenisWisata(event.target.value);
  }

  const [popupStyle, showPopup] = useState("hide")

  const popup =()=>{
      showPopup("Tambah-popup")
      setTimeout(()=> showPopup("hide"),3000)
  }

  return (
    <Col className="tambah-komoditi-pariwisata">
      <div className="cover-tambah-komoditi">
        <h1>Tambah Komoditi</h1>
        <h3>Nama Wisata</h3>
        <input type="text"/>
        <h3>Jenis Wisata</h3>
        <select value={selectedJenisWisata} onChange={handleJenisWisataChange}>
          <option value="Alam">Alam</option>
          <option value="Budaya">Budaya</option>
          <option value="Panorama">Panorama</option>
        </select>
        <div className="tambah-btn" onClick={popup}>Simpan</div>
      </div>
    </Col>
  );
}

export default TambahKomoditiPariwisata;
