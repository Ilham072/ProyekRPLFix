import React, { useState } from 'react';
import './InputFormPeternakan.css';

function InputFormPeternakan() {
    const [total, setTotal] = useState(0);
    const [kelahiran, setKelahiran] = useState(0);
    const [kematian, setKematian] = useState(0);
    const [pemotongan, setPemotongan] = useState(0);
    const [ternakkeluar, setTernakKeluar] = useState(0);
    const [ternakmasuk, setTernakMasuk] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan sesuatu dengan nilai input, misalnya mengirim ke API
        console.log(total, kelahiran, kematian, pemotongan, ternakkeluar, ternakmasuk);
    };

    return (
        <form onSubmit={handleSubmit} className='form-input'>
            <div className='form-input-row'>
                <label htmlFor='total'>Total</label>
                <input id='total' type='number' value={total} onChange={(e) => setTotal(e.target.value)} />
            </div>
            <div className='form-input-row'>
                <label htmlFor='kelahiran'>Kelahiran</label>
                <input id='kelahiran' type='date' value={kelahiran} onChange={(e) => setKelahiran(e.target.value)} />
            </div>
            <div className='form-input-row'>
                <label htmlFor='kematian'>Kematian</label>
                <input id='kematian' type='date' value={kematian} onChange={(e) => setKematian(e.target.value)} />
            </div>
            <div className='form-input-row'>
                <label htmlFor='pemotongan'>Pemotongan</label>
                <input id='pemotongan' type='date' value={pemotongan} onChange={(e) => setPemotongan(e.target.value)} />
            </div>
            <div className='form-input-row'>
                <label htmlFor='ternkkeluar'>Ternak Keluar</label>
                <input id='ternakkeluar' type='number' value={ternakkeluar} onChange={(e) => setTernakKeluar(e.target.value)} />
            </div>
            <div className='form-input-row'>
                <label htmlFor='ternakmasuk'>Ternak Masuk</label>
                <input id='ternakmasuk' type='number' value={ternakmasuk} onChange={(e) => setTernakMasuk(e.target.value)} />
            </div>
        </form>
    );
}

export default InputFormPeternakan;