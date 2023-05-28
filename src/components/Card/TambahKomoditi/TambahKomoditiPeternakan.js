import { useState } from 'react';
import { Col } from 'react-bootstrap';
import "./TambahKomoditi.css";
import axios from 'axios';
import toTitleCase from './../../../utils/titleCase';

const TambahKomoditiPeternakan = ({ sektor }) => {
  const [nama, setNama] = useState("");
  const [validation, setValidation] = useState([]);
  const bidang = "";
  const kecamatan = "";

  const [popupStyle, showPopup] = useState("hide");

  const popup = () => {
    showPopup("Tambah-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const token = localStorage.getItem('token');
    const formData = new FormData();

    formData.append('nama', toTitleCase(nama));
    formData.append('sektor', sektor);
    formData.append('bidang', bidang);
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

  };

  return (
    <Col className="tambah-komoditi-peternakan">
      <div className="cover-tambah-komoditi-2">
        <h1>Tambah Komoditi</h1>
        <h3>Nama Komoditi</h3>
        <input
          id="nama"
          type="text"
          value={nama}
          onChange={(event) => setNama(event.target.value)}
        />
        <div className="tambah-btn" onClick={handleSubmit}>
          Simpan
        </div>
      </div>
    </Col>
  );
};

export default TambahKomoditiPeternakan;
