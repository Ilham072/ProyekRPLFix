import React, { useState, useEffect } from 'react';
import { Button } from '../components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toTitleCase from './titleCase.js';

function InputFormKontenKomoditi({sektor, komoditi, editData}) {
    const [isi, setIsi] = useState("");
    const [gambar, setGambar] = useState(null);

    const handleIsiChange = (event) => {
        setIsi(event.target.value);
    };

    const history = useNavigate();
    const [validation, setValidation] = useState([]);

    useEffect(() => {
        if (editData) {
            setIsi(editData.isi);
        }
    }, [editData])


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(komoditi, sektor);

        const token = localStorage.getItem('token');
        const formData = new FormData();

        formData.append('judul', komoditi);
        formData.append('sektor', sektor);
        formData.append('gambar', gambar);
        formData.append('isi', isi);

        const url = editData
      ? `http://localhost:8000/api/Konten Komoditi/${editData.id}`
      : 'http://localhost:8000/api/Konten Komoditi';

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      try {
        if (editData) {
            await axios.post(url, formData);
            console.log('Sukses Mengupdate Data Konten Komoditi');
            localStorage.removeItem('editData');
        } else {
            await axios.post(url, formData);
            console.log('Sukses Menambahkan Data  Konten Komoditi');
        }

        const storedData = localStorage.getItem('dataKontenKomoditi');
        if (storedData) {
            localStorage.removeItem('dataKontenKomoditi')
        }
        history('/kontenKomoditi');
    } catch (error) {
        setValidation(error.response.data);
    }

    };

    const handleGambarChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
        setGambar(file);
        };
        reader.readAsDataURL(file);
    };

    return (
        <form onSubmit={handleSubmit} className='form-input'>
            <div className='judul-input-konten-komoditi'>
                <h1>Uraian</h1>
            </div>
            <div className='form-input-row'>
                <label htmlFor='fileInput'>Pilih Gambar</label>
                <input id='fileInput' type='file' onChange={handleGambarChange}/>
            </div>
            <div className='form-input-row'>
                <label htmlFor='isi'>Isi</label>
                <textarea
                    id="isi"
                    value={isi}
                    onChange={handleIsiChange}
                    style={{
                        minHeight: '20px',
                        maxHeight: '200px',
                        height: 'auto',
                        resize: 'vertical',
                    }}
                    rows={Math.min(20, isi?.split('\n').length)}/>
            </div>
            <div className='button-tambah-konten-komoditi'>
                <Button className='ButtonTambahBerita' type='submit'>
                {editData ? 'Ubah Data' : 'Tambah Data'}
                </Button>
            </div>
        </form>
  );
}

export default InputFormKontenKomoditi;