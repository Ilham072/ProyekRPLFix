import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "../../Button/Button";
import HasilSaran from "./HasilSaran";
import "./InputformSaran.css";
import axios from "axios";

const InputFormSaran = () => {
  const [saran, setSaran] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [saranData, setSaranData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('saran', saran);

    await axios.post(`${process.env.REACT_APP_API_URL}/api/Saran`, formData)
      .then((response) => {
        console.log(response.data.message);
        window.location.reload(false);
      }).catch((error) => {
        console.log(error.response.data);
      })

  };

  if (submitted) {
    return <HasilSaran saranData={saranData} />;
  }

  return (
    <div className="container-saran">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={20}
            value={saran}
            onChange={(e) => setSaran(e.target.value)}
          />
        </Form.Group>
        <div className="container-button-tambah-data">
          <Button className="TambahSaran" type="submit">
            Tambah Saran
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default InputFormSaran;