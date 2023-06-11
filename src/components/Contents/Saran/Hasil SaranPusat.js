import React, { useState } from "react";
import { Button } from "../../Button/Button";
import axios from "axios";
import "./HasilSaran.css";


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
      </div>
  );
};

export default HasilSaranPusat;