import React from "react";
import Carousel from "../../../components/Corousel/CarouselBeranda/Carousel";
import LogoApp from "../../../components/LogoApp/LogoApp";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
// import './../AdminPage/BerandaAdmin.css'
import News from "../../../utils/News";
import "./Beranda.css";
const Beranda = () => {
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
          <div><h3>Beranda</h3></div>
            <div className="isi_content">
                <Carousel/>
                <News/>
            </div>
        </div>
        

        {/* <div className='footer'>footer</div> */}
      </div>
    );
}

export default Beranda;