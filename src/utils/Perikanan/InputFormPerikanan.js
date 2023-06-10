import React, { useState, useEffect } from 'react';
// import './Inputform.css';
import { Button } from '../../components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PopupAdd from '../../components/PopUp/PopupAdd';



    

function InputFormPerikanan({komoditi, editData}) {

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

    const [volume, setVolume] = useState(0);
    const [nilai_produksi, setNilaiProduksi] = useState(0);

    const history = useNavigate();
    const [validation, setValidation] = useState([]);

    useEffect(() => {
        if (editData) {
            setVolume(Number.isInteger(+editData.volume) ?parseInt(editData.volume) : editData.volume);
            setNilaiProduksi(editData.nilai_produksi);
        }
    }, [editData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(komoditi, volume, nilai_produksi);

        const token = localStorage.getItem('token');
        const formData = new FormData();
        formData.append('komoditi', komoditi);
        formData.append('volume', volume);
        formData.append('nilai_produksi', nilai_produksi);

        const url = editData
      ? `http://localhost:8000/api/Perikanan/${editData.id}`
      : 'http://localhost:8000/api/Perikanan';

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        try {
            if (editData) {
                await axios.post(url, formData);
                console.log('Sukses Mengupdate Data Perikanan');
                localStorage.removeItem('editData');
            } else {
                await axios.post(url, formData);
                console.log('Sukses Menambahkan Data Perikanan');
            }

            const storedDataBeranda = localStorage.getItem('tablePerikanan');
            const storedData = localStorage.getItem('dataPerikanan');
            if (storedDataBeranda) {
                localStorage.removeItem('tablePerikanan');
            }
            if (storedData) {
                localStorage.removeItem('dataPerikanan')
            }
            history('/adminperikanan');
        } catch (error) {
            setValidation(error.response.data.errors);
        }
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
                <label htmlFor='volume'>Volume (Ton)</label>
                <input id='volume' type='number' value={volume} onChange={(e) => setVolume(e.target.value)} />
                {
              validation.volume && (
                <div className="alert-danger">
                  {validation.volume[0]}
                </div>
              )
                }
            </div>
            <div className='form-input-row'>
                <label htmlFor='nilai_produksi'>Nilai Produksi</label>
                <input id='nilai_produksi' type='number' value={nilai_produksi} onChange={(e) => setNilaiProduksi(e.target.value)} />
                {
              validation.nilai_produksi && (
                <div className="alert-danger">
                  {validation.nilai_produksi[0]}
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
                            message="Apakah Anda yakin menambah data?"
                            onConfirm={handleConfirm}
                            onCancel={handleCancel}
                        />
                    )}
            </div>
        </form>
    );
}

export default InputFormPerikanan;