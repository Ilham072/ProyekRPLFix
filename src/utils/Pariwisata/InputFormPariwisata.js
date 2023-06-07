import React, { useState, useEffect } from 'react';
// import './Inputform.css';
import { Button } from '../../components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toTitleCase from '../titleCase.js';
import PopupAdd from '../../components/PopUp/PopupAdd';

   


function InputFormPariwisata({jenis_wisata, nama_wisata, editData}) {
    const [showPopupAdd, setShowPopupAdd] = useState(false);

    const handleConfirm = () => {
      // Logika ketika tombol "Ya" ditekan
      console.log("Data telah ditambahkan.");
      setShowPopupAdd(false);
    };
  
    const handleCancel = () => {
      // Logika ketika tombol "Tidak" ditekan
      console.log("Batal menambahkan data.");
      setShowPopupAdd(false);
    };
  
    const handleButtonClick = () => {
      // Logika ketika tombol utama ditekan
      setShowPopupAdd(true);
    };
    
    const [desa, setDesa] = useState("");
    const [wisatawan, setWisatawan] = useState(0);

    const history = useNavigate();
    const [validation, setValidation] = useState([]);

    useEffect(() => {
        if (editData) {
            setDesa(editData.desa);
            setWisatawan(editData.wisatawan)
        }
    }, [editData])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(nama_wisata, jenis_wisata, desa, wisatawan);

        const token = localStorage.getItem('token');
        const formData = new FormData();
        formData.append('nama_wisata', nama_wisata);
        formData.append('jenis_wisata', jenis_wisata);
        formData.append('desa', toTitleCase(desa));
        formData.append('wisatawan', wisatawan);

        const url = editData
      ? `http://localhost:8000/api/Pariwisata/${editData.id}`
      : 'http://localhost:8000/api/Pariwisata';

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        try {
            if (editData) {
                await axios.post(url, formData);
                console.log('Sukses Mengupdate Data Pariwisata');
                localStorage.removeItem('editData');
            } else {
                await axios.post(url, formData);
                console.log('Sukses Menambahkan Data Pariwisata');
            }

            const storedDataBeranda = localStorage.getItem('tablePariwisata');
            const storedData = localStorage.getItem('dataPariwisata');
            if (storedDataBeranda) {
                localStorage.removeItem('tablePariwisata');
            }
            if (storedData) {
                localStorage.removeItem('dataPariwisata')
            }
            history('/adminpariwisata');
        } catch (error) {
            setValidation(error.response.data);
        }

    };

    return (
        <form onSubmit={handleSubmit} className='form-input'>
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
                    {editData ? 'Ubah Data' : 'Tambah Data'}
                </Button>
                    {showPopupAdd && (
                        <PopupAdd
                            message="Apakah Anda yakin menambah data?"
                            onConfirm={handleConfirm}
                            onCancel={handleCancel}
                        />
                    )}
            </div>
        </form>
    );
}

export default InputFormPariwisata;