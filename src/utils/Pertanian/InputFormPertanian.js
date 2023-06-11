import React, { useState, useEffect } from 'react';
import './InputFormPertanian.css';
import { Button } from '../../components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PopupAdd from '../../components/PopUp/PopupAdd';

function InputFormPertanian({bidang, komoditi, editData}) {

  const [showPopupAdd, setShowPopupAdd] = useState(false);

  const handleConfirm = async () => {
    // Logika ketika tombol "Ya" ditekan
    const token = localStorage.getItem('token');
        const formData = new FormData();
        formData.append('bidang', bidang);
        formData.append('komoditi', komoditi);
        formData.append('luas_lahan', luas_lahan);
        formData.append('produksi', produksi);
        formData.append('produktivitas',produktivitas);

        const url = editData
      ? `http://localhost:8000/api/Pertanian/${editData.id}`
      : 'http://localhost:8000/api/Pertanian';

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        try {
            if (editData) {
                await axios.post(url, formData);
                console.log('Sukses Mengupdate Data Pertanian');
                localStorage.removeItem('editData');
            } else {
                await axios.post(url, formData);
                console.log('Sukses Menambahkan Data Pertanian');
            }

            const storedDataBeranda = localStorage.getItem('tablePertanian');
            const storedData = localStorage.getItem('dataPertanian');
            if (storedDataBeranda) {
                localStorage.removeItem('tablePertanian');
            }
            if (storedData) {
                localStorage.removeItem('dataPertanian')
            }
            history('/adminpertanian');
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

    const [luas_lahan, setLuasLahan] = useState(0);
    const [produksi, setProduksi] = useState(0);
    const [produktivitas, setProduktivitas] = useState(0);

    const history = useNavigate();
    const [validation, setValidation] = useState([]);

    useEffect(() => {
        if (editData) {
            setLuasLahan(Number.isInteger(+editData.luas_lahan) ?parseInt(editData.luas_lahan) : editData.luas_lahan);
            setProduksi(Number.isInteger(+editData.produksi) ?parseInt(editData.produksi) : editData.produksi);
            setProduktivitas(Number.isInteger(+editData.produktivitas) ?parseInt(editData.produktivitas) : editData.produktivitas);
        }
    }, [editData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(luas_lahan, produksi, produktivitas, bidang, komoditi);
        setShowPopupAdd(true);
        
    };

    return (    
        <form onSubmit={handleSubmit} className='form-input'>
            {
              validation.komoditi && (
                <div className="alert-danger">
                  Bidang dan Komoditi harus dipilih
                </div>
              )
            }
            <div className='form-input-row'>
                <label htmlFor='luas_lahan'>Luas Panen (Ha)</label>
                <input id='luas_lahan' type='number' value={luas_lahan} onChange={(e) => setLuasLahan(e.target.value)} />
            {
              validation.luas_lahan && (
                <div className="alert-danger">
                  {validation.luas_lahan[0]}
                </div>
              )
            }
            </div>
            <div className='form-input-row'>
                <label htmlFor='produksi'>Produksi (Ton)</label>
                <input id='produksi' type='number' value={produksi} onChange={(e) => setProduksi(e.target.value)} />
            {
              validation.produksi && (
                <div className="alert-danger">
                  {validation.produksi[0]}
                </div>
              )
            }
            </div>
            <div className='form-input-row'>
                <label htmlFor='produktivitas'>Produktivitas (Kw/Ha)</label>
                <input id='produktivitas' type='number' value={produktivitas} onChange={(e) => setProduktivitas(e.target.value)} />
            {
              validation.produktivitas && (
                <div className="alert-danger">
                  {validation.produktivitas[0]}
                </div>
              )
            }
            </div>
            <div className='button-add'>
                <Button className="tambahDataButton">
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


export default InputFormPertanian;