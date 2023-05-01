import React from "react";
import Carousel from "../../../components/Corousel/CarouselBeranda/Carousel";
import LogoApp from "../../../components/LogoApp/LogoApp";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import SidebarAdmin from "../../../components/Sidebar/SidebarAdmin";
import KomoditiCategory from "../../../utils/KomoditiCategory";
// import './BerandaAdmin.css';
const BerandaAdmin = () => {
    return (
        <div className='container'>
            <div className='logo'>
                <div>
                    <LogoApp />
                </div>
            </div>
            <div className='header'>
                <div>
                    <HeaderAdmin />
                </div>
            </div>
            <div className='nav'>
                <SidebarAdmin />
            </div>
        
            <div className='content'>
                <div><h3>Beranda</h3></div>
                <div className="isi_content">
                    <Carousel/>
                    <KomoditiCategory/>
                </div>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    );
}

export default BerandaAdmin;