import React from "react";
import './PageNews.css';
import Sidebar from "./../../components/Sidebar/Sidebar"
import Header from "../../components/Header/Header";
import NewsContent from "../../components/Contents/News/NewsContent";
import LogoApp from "../../components/LogoApp/LogoApp";

function App() {
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
            <NewsContent />
        </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    );
  }
  
  export default App;