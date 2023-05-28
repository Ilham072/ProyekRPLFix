import React, {useEffect, useState} from "react";
import axios from "axios";
// import './InfoKomoditi.css';
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import KomoditiArtikel from "../../components/Contents/Komoditi/KomoditiArtikel";
import LogoApp from "../../components/LogoApp/LogoApp";

const KomoditiContent = () => {
    const [dataKontenKomoditi, setDataKontenKomoditi] = useState([]);
    useEffect(() => {
      async function fetchDataKontenKomoditiById() {
        const searchParams = new URLSearchParams(window.location.search);
        const kontenId = searchParams.get('id');
        let data;
        await axios.get(`http://localhost:8000/api/Konten Komoditi/${kontenId}`)
          .then((response) => {
            data = response.data.konten_komoditi;
          }).catch((error) => {
            console.log(error.response.message);
          })
          setDataKontenKomoditi(data);
      }
      fetchDataKontenKomoditiById()
    }, []);
    return (
      <div className='container'>
        <div className='logo'>
          <LogoApp/>
        </div>
        <div className='header'>
          <div>
            <Header />
          </div>
        </div>
        <div className='nav'>
            <Sidebar />
        </div>
        <div className='content'>
            <h4>{dataKontenKomoditi.sektor} || {dataKontenKomoditi.judul}</h4>
            <KomoditiArtikel kontenKomoditi={dataKontenKomoditi}/>
            
        </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    );
  }
  
  export default KomoditiContent;