import React , { useEffect, useState }from "react";
import axios from "axios";
import Carousel from "../../../components/Corousel/CarouselBeranda/Carousel";
import LogoApp from "../../../components/LogoApp/LogoApp";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
// import './../AdminPage/BerandaAdmin.css'
import News from "../../../utils/News";
import "./Beranda.css";
const Beranda = () => {
    const [dataBerita, setDataBerita] = useState([]);
    
    useEffect(() => {
      async function fetchDataKontenBerita() {
        let data;
        const storedData = localStorage.getItem("dataKontenBerita");
        if (storedData) {
          data = JSON.parse(storedData);
        } else {
          const response = await axios.get('http://localhost:8000/api/Konten Berita');
          data = response.data;
          localStorage.setItem('dataKontenBerita', JSON.stringify(data));
        }
          setDataBerita(data);
      }
      fetchDataKontenBerita();
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
          <div><h3>Beranda</h3></div>
            <div className="isi_content">
                <Carousel/>
                <News news={dataBerita}/>
            </div>
        </div>
        

        {/* <div className='footer'>footer</div> */}
      </div>
    );
}

export default Beranda;