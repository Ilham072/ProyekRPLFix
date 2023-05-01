import React from "react";
import './Header.css';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="header">
            <div className="judul_web">
                <h3><b>Digitalisasi Data Sumber Daya Alam</b></h3>
            </div>
            <div className="btn">
                <Link to='/login'><button className="login-btn">Masuk</button></Link>
            </div>
        </header>
    )
}

export default Header;