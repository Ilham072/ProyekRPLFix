import React, { useState } from 'react';
import './InputFormPertanian.css';

function InputFormPertanian() {
    const [luasPanen, setLuasPanen] = useState(0);
    const [produksi, setProduksi] = useState(0);
    const [produktivitas, setProduktivitas] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan sesuatu dengan nilai input, misalnya mengirim ke API
        console.log(luasPanen, produksi, produktivitas);
    };

    return (
        <form onSubmit={handleSubmit} className='form-input'>
            <div className='form-input-row'>
                <label htmlFor='luasPanen'>Luas Panen (Ha)</label>
                <input id='luasPanen' type='number' value={luasPanen} onChange={(e) => setLuasPanen(e.target.value)} />
            </div>
            <div className='form-input-row'>
                <label htmlFor='produksi'>Produksi (Ton)</label>
                <input id='produksi' type='number' value={produksi} onChange={(e) => setProduksi(e.target.value)} />
            </div>
            <div className='form-input-row'>
                <label htmlFor='produktivitas'>Produktivitas (Kw/Ha)</label>
                <input id='produktivitas' type='number' value={produktivitas} onChange={(e) => setProduktivitas(e.target.value)} />
            </div>
        </form>
    );
}

export default InputFormPertanian;