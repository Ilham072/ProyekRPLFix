import React, { useState } from "react";
import { Button } from "../../Button/Button";

const HasilSaran = () => {
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
    </div>
  );
};

export default HasilSaran;