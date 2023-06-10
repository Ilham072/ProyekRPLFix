import React, { useState } from "react";
import { Button } from "../../Button/Button";
import "./HasilSaran.css";

const HasilSaran = ({saranData}) => {

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
          <div key={index}>
            <p>{saran.saran}</p>
          </div>
        ))}
=======
        <div className="saranStyleContainer">
            {saranData.map((saran, index) => (
              <div key={index} className="saranStyle">
                <p>{saran.saran}</p>
              </div>
            ))}
        </div>
>>>>>>> fd6f78e359b91d8cf1c8e32bb39aafce10dbb7f2
    </div>
  );
};

export default HasilSaran;