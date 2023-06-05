import React from "react";
import LogoApp from "../../../components/LogoApp/LogoApp";
import Header from "../../../components/Header/Header";
// import "./Beranda.css";
import SidebarAdminPusat from "../../../components/Sidebar/SidebarAdminPusat";
import HasilSaran from "../../../components/Contents/Saran/HasilSaran";
const PageSaranAdminPusat = () => {
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
          <SidebarAdminPusat />
        </div>
        
        <div className='content'>
          <div><h3>Saran</h3></div>
            <div className="isi_content">
                <HasilSaran/>
            </div>
        </div>
        

        {/* <div className='footer'>footer</div> */}
      </div>
    );
}

export default PageSaranAdminPusat;