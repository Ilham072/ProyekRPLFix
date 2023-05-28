import React, { useState } from 'react';
// import './Inputform.css';
import { Button } from '../../components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PopupAdd from '../../components/PopUp/PopupAdd';

function InputFormPerindustrian({komoditi}) {

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

    const [potensi_kandungan, setPotensiKandungan] = useState(0);
    const [validation, setValidation] = useState([]);
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(komoditi, potensi_kandungan);

        const token = localStorage.getItem('token');
        const formData = new FormData();
        formData.append('komoditi', komoditi);
        formData.append('potensi_kandungan', potensi_kandungan);

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.post('http://localhost:8000/api/Perindustrian', formData)
        .then(() => {
            console.log('Sukses Menambahkan Data Perindustrian');
            const storedData = localStorage.getItem('tablePerindustrian');
            if (storedData) {
                localStorage.removeItem('tablePerindustrian');
            }
            history('/adminperindustrian')
        })
        .catch((error) => {
            setValidation(error.response.data);
        })
    };

    return (
        <form onSubmit={handleSubmit} className='form-input'>
            <div className='form-input-row'>
                <label htmlFor='volume'>Potensi Kandungan</label>
                <input id='potensi_kandungan' type='number' value={potensi_kandungan} onChange={(e) => setPotensiKandungan(e.target.value)} />
            </div>
            <div className='button-add'>
                <Button className="tambahDataButton" onClick={handleButtonClick} >
                    Tambah Data
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

export default InputFormPerindustrian;