<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import Reac, { useState, useEffect } from "react";
>>>>>>> fd6f78e359b91d8cf1c8e32bb39aafce10dbb7f2
import axios from "axios";
import "./KomoditiArtikel.css";
import GrafikKomoditiPeternakan from "../../../utils/Peternakan/GrafikKomoditiPeternakan";
import GrafikKomoditiPertanian from "../../../utils/Pertanian/GrafikKomoditiPertanian";
import GrafikKomoditiPerikanan from "../../../utils/Perikanan/GrafikKomoditiPerikanan";
import GrafikKomoditiPerindustrian from "../../../utils/Perindustrian/GrafikKomoditiPerindustrian";
import GrafikKomoditiPariwisata from "../../../utils/Pariwisata/GrafikKomoditiPariwisata";
import DataPariwisata from './../TablePariwisata/DataPariwisata';

<<<<<<< HEAD
const KomoditiArtikel = ({ kontenKomoditi }) => {
  const [dataKomoditi, setDataKomoditi] = useState([]);
=======
const KomoditiArtikel = ({ id, sektor, komoditi }) => {
  const [dataKomoditi, setDataKomoditi] = useState([]);
  const [kontenKomoditi, setKontenKomoditi] = useState([]);
>>>>>>> fd6f78e359b91d8cf1c8e32bb39aafce10dbb7f2
  let grafikKomoditi;

  async function fetchDataKomoditi(sektor, komoditi) {
    try{
      const response = await axios.get(`http://localhost:8000/api/${sektor}/${komoditi}`);
      setDataKomoditi(response.data);
    } catch (error) {
      console.error(error);
    }
  }

<<<<<<< HEAD
  useEffect(() => {
    fetchDataKomoditi(kontenKomoditi.sektor, kontenKomoditi.judul)
  }, [kontenKomoditi.sektor, kontenKomoditi.judul])

  // Menentukan grafik komoditi berdasarkan sektor konten yang dipilih
  if (kontenKomoditi.sektor === "Peternakan") {
    grafikKomoditi = <GrafikKomoditiPeternakan dataPeternakan={dataKomoditi}/>;
  } else if (kontenKomoditi.sektor === "Pertanian") {
    grafikKomoditi = <GrafikKomoditiPertanian dataPertanian={dataKomoditi}/>;
  } else if (kontenKomoditi.sektor === "Perikanan") {
    grafikKomoditi = <GrafikKomoditiPerikanan dataPerikanan={dataKomoditi} />;
  } else if (kontenKomoditi.sektor === "Perindustrian") {
    grafikKomoditi = <GrafikKomoditiPerindustrian dataPerindustrian={dataKomoditi}/>;
  } else if (kontenKomoditi.sektor === "Pariwisata") {
=======
  async function fetchKontenKomoditi(id) {
    let data;
    await axios.get(`http://localhost:8000/api/Konten Komoditi/${id}`)
      .then((response) => {
        data = response.data.konten_komoditi;
        setKontenKomoditi(data);
    }).catch((error) => {
        console.log(error.response.message);
    })
  }

  useEffect(() => {
    fetchDataKomoditi(sektor, komoditi);
    fetchKontenKomoditi(id);
  }, [id, sektor, komoditi])

  // Menentukan grafik komoditi berdasarkan sektor konten yang dipilih
  if (sektor === "Peternakan") {
    grafikKomoditi = <GrafikKomoditiPeternakan dataPeternakan={dataKomoditi}/>;
  } else if (sektor === "Pertanian") {
    grafikKomoditi = <GrafikKomoditiPertanian dataPertanian={dataKomoditi}/>;
  } else if (sektor === "Perikanan") {
    grafikKomoditi = <GrafikKomoditiPerikanan dataPerikanan={dataKomoditi} />;
  } else if (sektor === "Perindustrian") {
    grafikKomoditi = <GrafikKomoditiPerindustrian dataPerindustrian={dataKomoditi}/>;
  } else if (sektor === "Pariwisata") {
>>>>>>> fd6f78e359b91d8cf1c8e32bb39aafce10dbb7f2
    grafikKomoditi = <GrafikKomoditiPariwisata dataPariwisata={dataKomoditi}/>;
  }


  return (
    <div className="container-komoditi">
      <div className="KomoditiInfo">
        <h1>{kontenKomoditi.judul}</h1>
        <img src={kontenKomoditi.gambar} alt={kontenKomoditi.judul} style={{ justifyContent: "center" }} />
        <p>{kontenKomoditi.isi}</p>
      </div>
      <div className="grafikkomoditi">
        {grafikKomoditi}{/* Menampilkan grafik komoditi yang sesuai */}
      </div>
    </div>
  );
}

export default KomoditiArtikel;
