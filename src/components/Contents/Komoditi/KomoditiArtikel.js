import React from "react";
import "./KomoditiArtikel.css";
import GrafikKomoditiPeternakan from "../../../utils/Peternakan/GrafikKomoditiPeternakan";
import GrafikKomoditiPertanian from "../../../utils/Pertanian/GrafikKomoditiPertanian";
import GrafikKomoditiPerikanan from "../../../utils/Perikanan/GrafikKomoditiPerikanan";
import GrafikKomoditiPerindustrian from "../../../utils/Perindustrian/GrafikKomoditiPerindustrian";
import GrafikKomoditiPariwisata from "../../../utils/Pariwisata/GrafikKomoditiPariwisata";

const KomoditiArtikel = ({ kontenKomoditi }) => {
  let grafikKomoditi;

  // Menentukan grafik komoditi berdasarkan sektor konten yang dipilih
  if (kontenKomoditi.sektor === "Peternakan") {
    grafikKomoditi = <GrafikKomoditiPeternakan />;
  } else if (kontenKomoditi.sektor === "Pertanian") {
    grafikKomoditi = <GrafikKomoditiPertanian />;
  } else if (kontenKomoditi.sektor === "Perikanan") {
    grafikKomoditi = <GrafikKomoditiPerikanan />;
  } else if (kontenKomoditi.sektor === "Perindustrian") {
    grafikKomoditi = <GrafikKomoditiPerindustrian />;
  } else if (kontenKomoditi.sektor === "Pariwisata") {
    grafikKomoditi = <GrafikKomoditiPariwisata />;
  }

  return (
    <div className="container-komoditi">
      <div className="KomoditiInfo">
        <h1>{kontenKomoditi.judul}</h1>
        <img src={kontenKomoditi.gambar} alt={kontenKomoditi.judul} style={{ justifyContent: "center" }} />
        <p>{kontenKomoditi.isi}</p>
      </div>
      <div className="grafikkomoditi">
        {grafikKomoditi} {/* Menampilkan grafik komoditi yang sesuai */}
      </div>
    </div>
  );
}

export default KomoditiArtikel;
