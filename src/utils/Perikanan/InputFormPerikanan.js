import React, { useState } from 'react';
// import './Inputform.css';

function InputFormPerikanan() {
    const [volume, setVolume] = useState(0);
    const [nilaiProduksi, setNilaiProduksi] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan sesuatu dengan nilai input, misalnya mengirim ke API
        console.log(volume, nilaiProduksi);
    };

    return (
        <form onSubmit={handleSubmit} className='form-input'>
            <div className='form-input-row'>
                <label htmlFor='volume'>Volume (Ton)</label>
                <input id='volume' type='number' value={volume} onChange={(e) => setVolume(e.target.value)} />
            </div>
            <div className='form-input-row'>
                <label htmlFor='nilaProduksi'>Nilai Produksi</label>
                <input id='nilaiProduksi' type='number' value={nilaiProduksi} onChange={(e) => setNilaiProduksi(e.target.value)} />
            </div>
        </form>
    );
}

export default InputFormPerikanan;