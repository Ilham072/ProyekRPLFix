import React, { useState } from 'react';
import { Button } from '../components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function InputFormBanner() {
  const [banner, setSelectedBanner] = useState(null);
  const [validation, setValidation] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(banner);

    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('banner', banner);

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
    await axios.post('http://localhost:8000/api/Konten Banner', formData)
      .then(() => {
        console.log('Sukses Menambahkan Konten Banner');
        const storedData = localStorage.getItem('dataKontenBanner');
        if (storedData) {
          localStorage.removeItem('dataKontenBanner');
        }
          window.location.reload(false);
      })
      .catch((error) => {
          setValidation(error.response.data.errors);
      })
  };

  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedBanner(file);
    };
    reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={handleSubmit} className='form-input'>
        <div className='judul-input-banner'>
            <h3>Tambah Banner</h3>
        </div>
      <div className='form-input-row'>
        {/* <label htmlFor='fileInput'></label> */}
        <input id='fileInput' type='file' onChange={handleBannerChange} />
      </div>
      {
              validation.banner && (
                <div className="alert-danger">
                  {validation.banner.map((err) => err)}
                </div>
              )
      }
      <div className='button-save'>
        <Button className='ButtonSave' type='submit'>
          Simpan
        </Button>
      </div>
    </form>
  );
}

export default InputFormBanner;
