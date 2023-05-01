import React from "react";
import LogoApp from "../../../components/LogoApp/LogoApp";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Komoditi from "../../../utils/Komoditi";
import komoditiPerindustrian from "../../../config/Perindustrian/komoditiPerindustrian.json";

const PerindustrianUser = () => {
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
          <Komoditi komoditi={komoditiPerindustrian}/>
        </div>
        

        {/* <div className='footer'>footer</div> */}
      </div>
    );
}

export default PerindustrianUser;