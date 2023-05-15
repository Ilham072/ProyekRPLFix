import React, { useState } from 'react';
import './InputFormPeternakan.css';
import { Button } from '../../components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function InputFormPeternakan({komoditi}) {
    const [total, setTotal] = useState(0);
    const [kelahiran, setKelahiran] = useState(0);
    const [kematian, setKematian] = useState(0);
    const [pemotongan, setPemotongan] = useState(0);
    const [ternak_keluar, setTernakKeluar] = useState(0);
    const [ternak_masuk, setTernakMasuk] = useState(0);
    const [populasi, setPopulasi] = useState(0);

    const navigate = useNavigate();
    const [validation, setValidation] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(komoditi, total, kelahiran, kematian, pemotongan, ternak_keluar, ternak_masuk, populasi);

        const token = localStorage.getItem('token');
        const formData = new FormData();

        formData.append('komoditi', komoditi);
        formData.append('total', total);
        formData.append('kelahiran', kelahiran);
        formData.append('kematian', kematian);
        formData.append('pemotongan', pemotongan);
        formData.append('ternak_keluar', ternak_keluar);
        formData.append('ternak_masuk', ternak_masuk);
        formData.append('populasi', populasi);

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.post('http://localhost:8000/api/Peternakan', formData)
        .then(() => {
            console.log('Sukses Menambahkan Data Peternakan');
            const storedData = localStorage.getItem('tablePeternakan');
            if (storedData) {
                localStorage.removeItem('tablePeternakan');
            }
            navigate('/adminpeternakan');
        })
        .catch((error) => {
            setValidation(error.response.data);
        })
    };
    return (
        <form onSubmit={handleSubmit} className='form-input'>
            <div className='form-input-row'>
                <label htmlFor='total'>Total</label>
                <input id='total' type='number' value={total} onChange={(e) => setTotal(e.target.value)} />
            </div>
            <div className='form-input-row'>
                <label htmlFor='kelahiran'>Kelahiran</label>
                <input id='kelahiran' type='number' value={kelahiran} onChange={(e) => setKelahiran(e.target.value)} />
            </div>
            <div className='form-input-row'>
                <label htmlFor='kematian'>Kematian</label>
                <input id='kematian' type='number' value={kematian} onChange={(e) => setKematian(e.target.value)} />
            </div>
            <div className='form-input-row'>
                <label htmlFor='pemotongan'>Pemotongan</label>
                <input id='pemotongan' type='number' value={pemotongan} onChange={(e) => setPemotongan(e.target.value)} />
            </div>
            <div className='form-input-row'>
                <label htmlFor='ternak_keluar'>Ternak Keluar</label>
                <input id='ternak_keluar' type='number' value={ternak_keluar} onChange={(e) => setTernakKeluar(e.target.value)} />
            </div>
            <div className='form-input-row'>
                <label htmlFor='ternak_masuk'>Ternak Masuk</label>
                <input id='ternak_masuk' type='number' value={ternak_masuk} onChange={(e) => setTernakMasuk(e.target.value)} />              
            </div>
            <div className='form-input-row'>
                <label htmlFor='populasi'>Populasi</label>
                <input id='populasi' type='number' value={populasi} onChange={(e) => setPopulasi(e.target.value)} />
            </div>
            <div className='button-add'>
                <Button className="tambahDataButton">
                    Tambah Data
                </Button>
            </div>
        </form>
    );
}

export default InputFormPeternakan;