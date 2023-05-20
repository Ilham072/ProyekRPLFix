import Form from 'react-bootstrap/Form';
import React from "react";
import "./InputformSaran.css";

const InputFormSaran = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={10} />
      </Form.Group>
    </Form>
  );
}

export default InputFormSaran;