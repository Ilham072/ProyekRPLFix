import React from "react";
import "./KomoditiArtikel.css";

const KomoditiArtikel = ({kontenKomoditi}) => {
  return (
    <div className="container-komoditi">
      <div className="KomoditiInfo">
        <h1>{ kontenKomoditi.judul }</h1>
        <img src={kontenKomoditi.gambar} alt={kontenKomoditi.judul} />
        <p>{ kontenKomoditi.isi }</p>
      </div>
      <div className="grafikkomoditi">
        <img src="images/grafik_komoditi.png"/>
      </div>
    </div>
    
  );
}
  

export default KomoditiArtikel;