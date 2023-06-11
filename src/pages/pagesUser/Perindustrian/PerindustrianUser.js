import React, { useEffect, useState } from "react";
import axios from "axios";
import LogoApp from "../../../components/LogoApp/LogoApp";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Komoditi from "../../../utils/Komoditi";
import komoditiPerindustrian from "../../../config/Perindustrian/komoditiPerindustrian.json";

const PerindustrianUser = () => {
  const [dataKontenKomoditi, setDataKontenKomoditi] = useState([]);
  useEffect(() => {
    async function fetchDataKontenKomoditi() {
      let data;
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Konten Komoditi?sektor=Perindustrian`);
      data = response.data;
      setDataKontenKomoditi(data);
    }
    fetchDataKontenKomoditi();
  }, []);
    return (
        <div className='container'>
        <div className='logo'>
          <div>
            <LogoApp />
          </div>
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
          <div><h3>Perindustrian</h3></div>
          <Komoditi komoditi={dataKontenKomoditi}/>
        </div>
        

        {/* <div className='footer'>footer</div> */}
      </div>
    );
}

export default PerindustrianUser;