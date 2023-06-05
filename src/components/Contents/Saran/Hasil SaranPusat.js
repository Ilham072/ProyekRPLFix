import React, { useState } from "react";
import { Button } from "../../Button/Button";

const HasilSaranPusat = () => {
  const [saranData, setSaranData] = useState([]);

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
            <h2>{saran}</h2>
          </div>
        ))}
        <div style={{
              backgroundColor: "#ffffff",
              border: "none",
              display: "flex",
              textAlign: "right",
              width: "100%"
          }}>
          <Button className="btn-delete"> 
              <img src="assets/icon/button/button-delete.svg"/>
          </Button>
        </div>
    </div>
  );
};

export default HasilSaranPusat;