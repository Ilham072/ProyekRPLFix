import React, { useState } from "react";
import { Button } from "../../Button/Button";
import axios from "axios";

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
      backgroundColor: "#ffffff", 
      width: "100%", 
      height: "200px", 
      padding: "10px", 
      display: "flex",
      borderRadius: "15px"

      }}>
        {saranData.map((saran, index) => (
          <div key={saran.id}>
            <p>{saran.saran}</p>
            <Button className="btn-delete" onClick={() => deleteHandler(saran.id)}> 
              <img src="assets/icon/button/button-delete.svg"/>
            </Button>
          </div>
        ))}
        <div style={{
              backgroundColor: "#ffffff",
              border: "none",
              display: "flex",
              textAlign: "right",
              width: "100%"
          }}>
        </div>
    </div>
  );
};

export default HasilSaranPusat;