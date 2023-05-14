import React, { useState } from 'react';
import { Button } from '../components';

function InputFormBanner() {
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
            <h3>Tambah Banner</h3>
        </div>
      <div className='form-input-row'>
        {/* <label htmlFor='fileInput'></label> */}
        <input id='fileInput' type='file' onChange={handleFileChange} />
      </div>
      <div className='button-save'>
        <Button className='ButtonSave' type='submit'>
          Simpan
        </Button>
      </div>
    </form>
  );
}

export default InputFormBanner;
