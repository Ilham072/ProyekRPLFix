import React, { useState, useEffect } from 'react';
// import './Inputform.css';
import { Button } from '../../components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PopupAdd from '../../components/PopUp/PopupAdd';


function InputFormPerindustrian({komoditi, editData}) {

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

    useEffect(() => {
        if (editData) {
            setPotensiKandungan(editData.potensi_kandungan);
        }
    }, [editData])

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(komoditi, potensi_kandungan);

        const token = localStorage.getItem('token');
        const formData = new FormData();
        formData.append('komoditi', komoditi);
        formData.append('potensi_kandungan', potensi_kandungan);

        const url = editData
      ? `http://localhost:8000/api/Perindustrian/${editData.id}`
      : 'http://localhost:8000/api/Perindustrian';

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        try {
            if (editData) {
                await axios.post(url, formData);
                console.log('Sukses Mengupdate Data Perindustrian');
                localStorage.removeItem('editData');
            } else {
                await axios.post(url, formData);
                console.log('Sukses Menambahkan Data Perindustrian');
            }

            const storedDataBeranda = localStorage.getItem('tablePerindustrian');
            const storedData = localStorage.getItem('dataPerindustrian');
            if (storedDataBeranda) {
                localStorage.removeItem('tablePerindustrian');
            }
            if (storedData) {
                localStorage.removeItem('dataPerindustrian')
            }
            history('/adminperindustrian');
        } catch (error) {
            setValidation(error.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='form-input'>
            <div className='form-input-row'>
                <label htmlFor='potensi_kandungan'>Potensi Kandungan</label>
                <input id='potensi_kandungan' type='number' value={potensi_kandungan} onChange={(e) => setPotensiKandungan(e.target.value)} />
            </div>
            <div className='button-add'>
                <Button className="tambahDataButton" >
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

export default InputFormPerindustrian;