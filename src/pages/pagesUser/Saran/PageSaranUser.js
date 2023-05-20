import React from "react";
import LogoApp from "../../../components/LogoApp/LogoApp";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
// import "./Beranda.css";
import InputFormSaran from "../../../components/Contents/Saran/InputFormSaran";
const PageSaranUser = () => {
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
          <div><h3>Saran</h3></div>
            <div className="isi_content">
                <InputFormSaran/>
            </div>
        </div>
        

        {/* <div className='footer'>footer</div> */}
      </div>
    );
}

export default PageSaranUser;