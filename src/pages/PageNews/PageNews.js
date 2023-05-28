import React, {useEffect, useState} from "react";
import axios from "axios";
import './PageNews.css';
import Sidebar from "./../../components/Sidebar/Sidebar"
import Header from "../../components/Header/Header";
import NewsContent from "../../components/Contents/News/NewsContent";
import LogoApp from "../../components/LogoApp/LogoApp";

function App() {
  const [dataBerita, setDataBerita] = useState([]);
  useEffect(() => {
      async function fetchDataBeritabyId() {
        const searchParams = new URLSearchParams(window.location.search);
  const newsId = searchParams.get('id');
        let data;
        await axios.get(`http://localhost:8000/api/Konten Berita/${newsId}`)
        .then((response) => {
            console.log(response.data.konten_berita);
            data = response.data.konten_berita;
        }).catch((error) => {
          console.log(error.response.message);
        })
        setDataBerita(data);
      }
      fetchDataBeritabyId();
    }, []);
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
            <h4>Beranda</h4>
            <NewsContent news={dataBerita}/>
        </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    );
  }
  
  export default App;