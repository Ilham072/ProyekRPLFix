import React, { useState } from 'react';
import { Button } from '../components';

function InputFormAdmin() {
    const [namaLengkap, setNamaLengkap] = useState(0);
    const [kecamatan, setKecamatan] = useState(0);
    const [username, setUsername] = useState(0);
    const [password, setPassword] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan sesuatu dengan nilai input, misalnya mengirim ke API
        console.log(namaLengkap, kecamatan, username, password);
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
            <div className='button-add'>
                <Button className="tambahDataButton">
                    Tambah Admin
                </Button>
            </div>
        </form>
    );
}

export default InputFormAdmin;