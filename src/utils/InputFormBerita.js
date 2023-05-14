import React, { useState } from 'react';
import { Button } from '../components';

function InputFormBerita() {
    const [judul, setJudul] = useState(0);
    const [isi, setIsi] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan sesuatu dengan nilai input, misalnya mengirim ke API
        console.log(selectedFile);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
        setSelectedFile(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <form onSubmit={handleSubmit} className='form-input'>
            <div className='judul-input-banner'>
                <h3>Uraian</h3>
            </div>
            <div className='form-input-row'>
                    <label htmlFor='judul'>Judul</label>
                    <input id='judul' type='text' value={judul} onChange={(e) => setJudul(e.target.value)} />
            </div>
            <div className='form-input-row'>
                    <label htmlFor='isi'>Isi</label>
                    <input id='isi' type='text' value={judul} onChange={(e) => setIsi(e.target.value)} />
            </div>
            <div className='form-input-row'>
                <label htmlFor='fileInput'>Pili Gambar</label>
                <input id='fileInput' type='file' onChange={handleFileChange} />
            </div>
            <div className='button-tambah-berita'>
                <Button className='ButtonTambahBerita' type='submit'>
                    Tambah Berita
                </Button>
            </div>
        </form>
  );
}

export default InputFormBerita;
