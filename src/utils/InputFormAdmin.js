import React, { useState, useEffect } from 'react';
import { Button } from '../components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toTitleCase from './titleCase';

function InputFormAdmin({editData}) {
    const [namaLengkap, setNamaLengkap] = useState("");
    const [kecamatan, setKecamatan] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [pass_confirm, setPassConfirm] = useState("");

    const navigate = useNavigate();
    const [validation, setValidation] = useState([]);

    useEffect(() => {
        if (editData) {
            setNamaLengkap(editData.name);
            setUsername(editData.username);
            setKecamatan(editData.kecamatan);
            setPassword(editData.password);
        }
    }, [editData])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(namaLengkap, kecamatan, username, password);

        const token = localStorage.getItem('token');
        const formData = new FormData();

        formData.append('name', namaLengkap);
        formData.append('username', username);
        formData.append('kecamatan', toTitleCase(kecamatan));
        formData.append('password', password);
        formData.append('password_confirmation', pass_confirm);

        const url = editData ? `http://localhost:8000/api/Admin/${editData.id}` : `http://localhost:8000/api/register`;

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        try {
            if (editData) {
                await axios.post(url, formData);
                console.log('Sukses Mengupdate Data Admin Kecamatan');
                localStorage.removeItem('editData');
            } else {
                await axios.post(url, formData);
                console.log('Sukses Menambahkan Admin Kecamatan');
            }

            const storedData = localStorage.getItem('dataAdmin');
            if (storedData) {
                localStorage.removeItem('dataAdmin')
            }
            navigate('/dataAdmin');
        } catch (error) {
            setValidation(error.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='form-input'>
            <div className='form-input-row'>
                <label htmlFor='namaLengkap'>Nama Lengkap</label>
                <input id='namaLengkap' type='text' value={namaLengkap} onChange={(e) => setNamaLengkap(e.target.value)} />
            </div>
            <div className='form-input-row'>
                <label htmlFor='kecamatan'>Kecamatan</label>
                <input id='kecamatan' type='text' value={kecamatan} onChange={(e) => setKecamatan(e.target.value)} />
            </div>
            <div className='form-input-row'>
                <label htmlFor='username'>Username</label>
                <input id='username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className='form-input-row'>
                <label htmlFor='password'>Password</label>
                <input id='password' type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='form-input-row'>
                <label htmlFor='pass_confirm'>Konfirmasi Password</label>
                <input id='pass_confirm' type='text' value={pass_confirm} onChange={(e) => setPassConfirm(e.target.value)} />
            </div>
            <div className='button-add'>
                <Button className="tambahDataButton">
                {editData ? 'Ubah Data' : 'Tambah Data'}
                </Button>
            </div>
        </form>
    );
}

export default InputFormAdmin;