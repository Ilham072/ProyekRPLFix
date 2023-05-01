import React, { useState } from 'react';
// import './Inputform.css';

function InputFormPerindustrian() {
    const [potensiKandungan, setPotensiKandungan] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan sesuatu dengan nilai input, misalnya mengirim ke API
        console.log(potensiKandungan);
    };

    return (
        <form onSubmit={handleSubmit} className='form-input'>
            <div className='form-input-row'>
                <label htmlFor='volume'>Potensi Kandungan</label>
                <input id='potensiKandungan' type='number' value={potensiKandungan} onChange={(e) => setPotensiKandungan(e.target.value)} />
            </div>
        </form>
    );
}

export default InputFormPerindustrian;