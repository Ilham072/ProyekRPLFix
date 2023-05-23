import React from "react";
import LogoApp from "../../../components/LogoApp/LogoApp";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Komoditi from "../../../utils/Komoditi";
import komoditiPertanian from "../../../config/pertanian/komoditiPertanian.json";
import GrafikKomoditiPertanian from "../../../utils/Pertanian/GrafikKomoditiPertanian";
// import './Pertanian.css'



const Pertanian = () => {
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
          <div><h3>Pertanian</h3></div>
          <Komoditi komoditi={komoditiPertanian}/>
          
        </div>
        

        {/* <div className='footer'>footer</div> */}
      </div>
    );
}

export default Pertanian;