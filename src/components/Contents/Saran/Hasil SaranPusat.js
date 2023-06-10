import React, { useState } from "react";
import { Button } from "../../Button/Button";
import axios from "axios";
<<<<<<< HEAD
=======
import "./HasilSaran.css";
>>>>>>> fd6f78e359b91d8cf1c8e32bb39aafce10dbb7f2

const HasilSaranPusat = ({saranData}) => {
  const token = localStorage.getItem('token');
  const deleteHandler = async (id) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    await axios.delete(`http://localhost:8000/api/Saran/${id}`)
      .then((response) => {
        console.log(response)
        window.location.reload(false);
      }).catch((error) => {
        console.log(error)
      })
  }
  return (
    <div style={{
      width: "100%", 
      height: "maxContent", 
      padding: "10px", 
      display: "flex",
      borderRadius: "15px"

      }}>
<<<<<<< HEAD
        {saranData.map((saran, index) => (
          <div key={saran.id}>
            <p>{saran.saran}</p>
            <Button className="btn-delete" onClick={() => deleteHandler(saran.id)}> 
              <img src="assets/icon/button/button-delete.svg"/>
            </Button>
          </div>
        ))}
        <div style={{
=======
        <div className="saranStyleContainer">
          {saranData.map((saran, index) => (
            <div key={saran.id} className="saranStyle">
              <span>{saran.saran}</span>
              <span className="container-delete-saran">
                <Button className="btn-delete" onClick={() => deleteHandler(saran.id)}> 
                  <img src="assets/icon/button/button-delete.svg"/>
                </Button>
              </span>
            </div>
          ))}
        </div>
        {/* <div style={{
>>>>>>> fd6f78e359b91d8cf1c8e32bb39aafce10dbb7f2
              backgroundColor: "#ffffff",
              border: "none",
              display: "flex",
              textAlign: "right",
              width: "100%"
          }}>
<<<<<<< HEAD
        </div>
=======
        </div> */}
>>>>>>> fd6f78e359b91d8cf1c8e32bb39aafce10dbb7f2
    </div>
  );
};

export default HasilSaranPusat;