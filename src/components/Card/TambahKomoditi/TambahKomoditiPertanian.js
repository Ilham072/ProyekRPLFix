import { useState } from 'react';
import { Col } from 'react-bootstrap';
import "./TambahKomoditi.css";
import toTitleCase from './../../../utils/titleCase';
import axios from 'axios';

const TambahKomoditiPertanian= ({ sektor }) => {
  const [selectedBidangKomoditi, setSelectedBidangKomoditi] = useState("");
  const [validation, setValidation] = useState([]);
  const [nama, setNama] = useState("");
  const kecamatan = "";


  const handleBidangKomoditiChange = (event) => {
    setSelectedBidangKomoditi(event.target.value);
  }

  const [popupStyle, showPopup] = useState("hide")

  const popup =()=>{
      showPopup("Tambah-popup")
      setTimeout(()=> showPopup("hide"),3000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const formData = new FormData();

    console.log(selectedBidangKomoditi)

    formData.append('nama', toTitleCase(nama));
    formData.append('sektor', sektor);
    formData.append('bidang', selectedBidangKomoditi);
    formData.append('kecamatan', kecamatan);

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    try{
      await axios.post('http://localhost:8000/api/Komoditi', formData);
      console.log('Sukses Menambahkan Data Komoditi');
      const storedData = localStorage.getItem('dataKomoditi');
        if (storedData) {
          localStorage.removeItem('dataKomoditi');
        }
        window.location.reload(false);
    }catch(error) {
      setValidation(error.response.data);
    }
    
  }

  return (
    <Col className="tambah-komoditi-pertanian">
      <div className="cover-tambah-komoditi">
        <h1>Tambah Komoditi</h1>
        <h3>Nama Komoditi</h3>
        <input
          id="nama"
          type="text"
          value={nama}
          onChange={(event) => setNama(event.target.value)}
        />
        <h3>Bidang Komoditi</h3>
        <select value={selectedBidangKomoditi} onChange={handleBidangKomoditiChange}>
          <option value="">- Pilih Bidang -</option>
          <option value="Tanaman Pangan">Tanaman Pangan</option>
          <option value="Hortikultura">Hortikultura</option>
          <option value="Perkebunan">Perkebunan</option>
        </select>
        <div className="tambah-btn" onClick={handleSubmit}>Simpan</div>
      </div>
    </Col>
  );
}

export default TambahKomoditiPertanian;
