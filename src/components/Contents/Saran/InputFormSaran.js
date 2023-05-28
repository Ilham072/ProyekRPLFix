import Form from 'react-bootstrap/Form';
import React from "react";
import "./InputformSaran.css";
import { Button } from '../../Button/Button';

const InputFormSaran = () => {
  return (
    <div className='container-saran'> 
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={10} />
        </Form.Group>
      </Form>
      <Button className="ButtonTambahSaran">
          Tambah Saran
      </Button>
    </div>
    
  );
}

export default InputFormSaran;