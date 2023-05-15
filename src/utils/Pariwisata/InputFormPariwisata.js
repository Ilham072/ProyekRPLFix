import React, { useState } from 'react';
// import './Inputform.css';
import { Button } from '../../components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toTitleCase from '../titleCase.js';

function InputFormPariwisata({jenis_wisata}) {
    const [nama_wisata, setNamaWisata] = useState("");
    const [desa, setDesa] = useState("");
    const [wisatawan, setWisatawan] = useState(0);

    const history = useNavigate();
    const [validation, setValidation] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(nama_wisata, jenis_wisata, desa, wisatawan);

        const token = localStorage.getItem('token');
        const formData = new FormData();
        formData.append('nama_wisata', toTitleCase(nama_wisata));
        formData.append('jenis_wisata', jenis_wisata);
        formData.append('desa', toTitleCase(desa));
        formData.append('wisatawan', wisatawan);

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.post('http://localhost:8000/api/Pariwisata', formData)
        .then(() => {
            console.log('Sukses Menambahkan Data Pariwisata');
            const storedData = localStorage.getItem('tablePariwisata');
            if (storedData) {
                localStorage.removeItem('tablePariwisata');
            }
            history('/adminpariwisata')
        })
        .catch((error) => {
            setValidation(error.response.data);
        })
    };

    return (
        <form onSubmit={handleSubmit} className='form-input'>
            <div className='form-input-row'>
                <label htmlFor='nama_wisata'>Nama Wisata</label>
                <input id='nama_wisata' type='text' value={nama_wisata} onChange={(e) => setNamaWisata(e.target.value)} />
            </div>
            <div className='form-input-row'>
                <label htmlFor='desa'>Desa</label>
                <input id='desa' type='text' value={desa} onChange={(e) => setDesa(e.target.value)} />
            </div>
            <div className='form-input-row'>
                <label htmlFor='wisatawan'>Wisatawan</label>
                <input id='wisatawan' type='number' value={wisatawan} onChange={(e) => setWisatawan(e.target.value)} />
            </div>
            <div className='button-add'>
                <Button className="tambahDataButton">
                    Tambah Data
                </Button>
            </div>
        </form>
    );
}

export default InputFormPariwisata;