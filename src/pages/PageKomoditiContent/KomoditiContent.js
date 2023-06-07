import React, {useEffect, useState} from "react";
import axios from "axios";
// import './InfoKomoditi.css';
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import KomoditiArtikel from "../../components/Contents/Komoditi/KomoditiArtikel";
import LogoApp from "../../components/LogoApp/LogoApp";
import { saveAs } from 'file-saver';

const KomoditiContent = () => {
    const [dataKontenKomoditi, setDataKontenKomoditi] = useState([]);
    const searchParams = new URLSearchParams(window.location.search);
    const kontenId = searchParams.get('id');
    async function fetchDataKontenKomoditiById(id) {
      let data;
      await axios.get(`http://localhost:8000/api/Konten Komoditi/${id}`)
        .then((response) => {
          data = response.data.konten_komoditi;
        }).catch((error) => {
          console.log(error.response.message);
        })
        setDataKontenKomoditi(data);
    }

    const downloadExcel = async (sektor, komoditi) => {
      try {
          const response = await axios.get(`http://localhost:8000/api/${sektor} ${komoditi}/xslx`, {
              responseType: 'blob', // Set response type to 'blob'
          });
          saveAs(response.data, `Laporan ${komoditi}`);
          
      } catch (error) {
          console.log(error);
      }
  }

    useEffect(() => {
      fetchDataKontenKomoditiById(kontenId)
    }, [kontenId]);
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