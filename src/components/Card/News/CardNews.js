import React from 'react';
import './CardNews.css';
import { useNavigate } from 'react-router-dom';
import subText from '../../../utils/subText';

const CardNews = (props) => {
    const navigate = useNavigate();
    function sektorlogo(sektor) {
        switch(sektor) {
            case "Pertanian": 
                return "assets/icon/logo_komoditi/pertanian_logo.svg";
            case "Peternakan": 
                return "assets/icon/logo_komoditi/peternakan_logo.svg";
            case "Perikanan": 
                return "assets/icon/logo_komoditi/perikanan_logo.svg";
            case "Perindustrian":
                return "assets/icon/logo_komoditi/perindustrian_logo.svg";
            case "Pariwisata":
                return "assets/icon/logo_komoditi/pariwisata_logo.svg";
            default:
                return "";
        }
    }

    // function newsHandler() {
    //     localStorage.setItem('idBerita', props.news.id);
    //     window.location.href = `/pagenews?${props.news.id}`
    // }

    function newsHandler(navigate) {
        const newsId = props.news.id;
        navigate(`/pagenews?id=${newsId}`);
      }

    const logo = sektorlogo(props.news.sektor);
    return (
        <div className="CardNews">
            <div className="CardNews-category">
                <img src={logo}/>
                <span>{props.news.sektor}</span>
            </div>
            <div className="CardNews-image">
                <img src={props.news.gambar} alt={props.news.judul}/>
            </div>
            <div className="CardNews-content">
                <div className="CardNews-description">
                {subText(props.news.isi)}
                </div>
                <div className="card-button">
                        <button onClick={() => newsHandler(navigate)}>
                            <img src="assets/icon/button/button1.png"/>
                        </button>
                </div>
                
            </div>
        </div>
    )
}

export default CardNews;
