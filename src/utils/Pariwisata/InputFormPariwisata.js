import React, { useState } from 'react';
// import './Inputform.css';

function InputFormPariwisata() {
    const [namaWisata, setNamaWisata] = useState(0);
    const [desa, setDesa] = useState(0);
    const [wisatawan, setWisatawan] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan sesuatu dengan nilai input, misalnya mengirim ke API
        console.log(namaWisata, desa, wisatawan);
    };

    return (
        <form onSubmit={handleSubmit} className='form-input'>
            <div className='form-input-row'>
                <label htmlFor='namaWisata'>Nama Wisata</label>
                <input id='namaWisata' type='text' value={namaWisata} onChange={(e) => setNamaWisata(e.target.value)} />
            </div>
            <div className='form-input-row'>
                <label htmlFor='desa'>Desa</label>
                <input id='desa' type='text' value={desa} onChange={(e) => setDesa(e.target.value)} />
            </div>
            <div className='form-input-row'>
                <label htmlFor='wisatawan'>Wisatawan</label>
                <input id='wisatawan' type='number' value={wisatawan} onChange={(e) => setWisatawan(e.target.value)} />
            </div>
        </form>
    );
}

export default InputFormPariwisata;