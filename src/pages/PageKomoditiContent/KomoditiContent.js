import React from "react";
// import './InfoKomoditi.css';
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import KomoditiArtikel from "../../components/Contents/Komoditi.js/KomoditiArtikel";
import LogoApp from "../../components/LogoApp/LogoApp";

const KomoditiContent = () => {
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
            <h4>Pertanian || Jagung</h4>
            <KomoditiArtikel />
            
        </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    );
  }
  
  export default KomoditiContent;