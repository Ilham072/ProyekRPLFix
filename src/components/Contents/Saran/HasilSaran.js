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
        <div className="saranStyleContainer">
            {saranData.map((saran, index) => (
              <div key={index} className="saranStyle">
                <p>{saran.saran}</p>
              </div>
            ))}
        </div>
    </div>
  );
};

export default HasilSaran;