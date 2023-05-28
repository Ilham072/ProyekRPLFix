import React, {useState}from 'react';
import './InputFormPertanian.css';
import { Button } from '../../components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PopupAdd from '../../components/PopUp/PopupAdd';
function InputFormPertanian({bidang, komoditi}) {

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
    
    const [luas_lahan, setLuasLahan] = useState(0);
    const [produksi, setProduksi] = useState(0);
    const [produktivitas, setProduktivitas] = useState(0);

    const history = useNavigate();
    const [validation, setValidation] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(luas_lahan, produksi, produktivitas, bidang, komoditi);
        
        const token = localStorage.getItem('token');
        const formData = new FormData();
        formData.append('bidang', bidang);
        formData.append('komoditi', komoditi);
        formData.append('luas_lahan', luas_lahan);
        formData.append('produksi', produksi);
        formData.append('produktivitas',produktivitas);

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.post('http://localhost:8000/api/Pertanian', formData)
        .then(() => {
            console.log('Sukses Menambahkan Data Pertanian');
            const storedData = localStorage.getItem('tablePertanian');
            if (storedData) {
                localStorage.removeItem('tablePertanian');
            }
            history('/adminpertanian')
        })
        .catch((error) => {
            setValidation(error.response.data);
        })

        
    };

    return (
        <form onSubmit={handleSubmit} className='form-input'>
            <div className='form-input-row'>
                <label htmlFor='luas_lahan'>Luas Panen (Ha)</label>
                <input id='luas_lahan' type='number' value={luas_lahan} onChange={(e) => setLuasLahan(e.target.value)} />
            </div>
            <div className='form-input-row'>
                <label htmlFor='produksi'>Produksi (Ton)</label>
                <input id='produksi' type='number' value={produksi} onChange={(e) => setProduksi(e.target.value)} />
            </div>
            <div className='form-input-row'>
                <label htmlFor='produktivitas'>Produktivitas (Kw/Ha)</label>
                <input id='produktivitas' type='number' value={produktivitas} onChange={(e) => setProduktivitas(e.target.value)} />
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

export default InputFormPertanian;