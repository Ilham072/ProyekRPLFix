import React, {useEffect, useState} from "react";
import axios from "axios";
// import './InfoKomoditi.css';
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import KomoditiArtikel from "../../components/Contents/Komoditi/KomoditiArtikel";
import LogoApp from "../../components/LogoApp/LogoApp";
import { saveAs } from 'file-saver';

const KomoditiContent = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const sektor = searchParams.get('sektor');
    const komoditi = searchParams.get('komoditi');
    const id = searchParams.get('id');
    

    // useEffect(() => {
    //   async function fetchDataKontenKomoditiById(id) {
    //     let data;
    //     await axios.get(`http://localhost:8000/api/Konten Komoditi/${id}`)
    //       .then((response) => {
    //         data = response.data.konten_komoditi;
    //         setDataKontenKomoditi(data);
    //       }).catch((error) => {
    //         console.log(error.response.message);
    //       })
    //   }
      
    //   const searchParams = new URLSearchParams(window.location.search);
    //   const kontenId = searchParams.get('id');

    //   console.log(kontenId);
    //   fetchDataKontenKomoditiById(kontenId);
    //   console.log(dataKontenKomoditi);
    // }, []);

    const downloadExcel = async (sektor, komoditi) => {
      try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/${sektor} ${komoditi}/xslx`, {
              responseType: 'blob', // Set response type to 'blob'
          });
          saveAs(response.data, `Laporan ${komoditi}`);
          
      } catch (error) {
          console.log(error);
      }
  }

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
            <h4>{sektor} || {komoditi}</h4>
            <KomoditiArtikel id={id} sektor={sektor} komoditi={komoditi}/>
            
        </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    );
  }
  
  export default KomoditiContent;
