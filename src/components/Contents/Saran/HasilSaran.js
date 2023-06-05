import React, { useState } from "react";

const HasilSaran = () => {
  const [saranData, setSaranData] = useState([]);

  return (
    <div>
      <h1>Hasil Inputan Saran</h1>
      {saranData.map((saran, index) => (
        <div key={index}>
          <h2>{saran}</h2>
        </div>
      ))}
    </div>
  );
};

export default HasilSaran;