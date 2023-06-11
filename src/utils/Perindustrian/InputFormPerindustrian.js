import React, { useState, useEffect } from 'react';
// import './Inputform.css';
import { Button } from '../../components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PopupAdd from '../../components/PopUp/PopupAdd';


function InputFormPerindustrian({komoditi, editData}) {

    const [showPopupAdd, setShowPopupAdd] = useState(false);

  const handleConfirm = async () => {
    // Logika ketika tombol "Ya" ditekan
    const token = localStorage.getItem('token');
        const formData = new FormData();
        formData.append('komoditi', komoditi);
        formData.append('potensi_kandungan', potensi_kandungan);

        const url = editData
      ? `${process.env.REACT_APP_API_URL}/api/Perindustrian/${editData.id}`
      : `${process.env.REACT_APP_API_URL}/api/Perindustrian`;

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
            setValidation(error.response.data.errors);
        }
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
        setShowPopupAdd(true);   
    };

    return (
        <form onSubmit={handleSubmit} className='form-input'>
            {
              validation.komoditi && (
                <div className="alert-danger">
                  Komoditi harus dipilih
                </div>
              )
            }
            <div className='form-input-row'>
                <label htmlFor='potensi_kandungan'>Potensi Kandungan</label>
                <input id='potensi_kandungan' type='number' value={potensi_kandungan} onChange={(e) => setPotensiKandungan(e.target.value)} />
                {
              validation.potensi_kandungan && (
                <div className="alert-danger">
                  {validation.potensi_kandungan[0]}
                </div>
              )
            }
            </div>
            <div className='button-add'>
                <Button className="tambahDataButton" >
                    {editData ? 'Ubah Data' : 'Tambah Data'}
                </Button>
                    {showPopupAdd && (
                        <PopupAdd
                            message={editData ? "Apakah Anda yakin mengubah data?" : "Apakah Anda yakin manambah data?"}
                            onConfirm={handleConfirm}
                            onCancel={handleCancel}
                        />
                    )}
            </div>
        </form>
    );
}

export default InputFormPerindustrian;