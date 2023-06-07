import React, { useState } from "react";
import { Button } from "../../Button/Button";

const HasilSaran = ({saranData}) => {

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
          <div key={index}>
            <p>{saran.saran}</p>
          </div>
        ))}
    </div>
  );
};

export default HasilSaran;