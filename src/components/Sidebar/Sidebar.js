import React, { Component } from "react";
import './Sidebar.css';
import { Link } from "react-router-dom";



class Navbar extends Component {
    render() {
        return (
            <div className="sidebar">
                <nav className="navbar">
                    <ul>
                        <li><b>MENU</b></li>
                        <li><Link to="/" activeClassName="active"><img src="assets/icon/icon_sidebar/icon_beranda.svg" /> Beranda</Link></li>
                        <li><Link to="/Pertanian" activeClassName="active"><img src="assets/icon/logo_komoditi/pertanian_logo.svg" /> Pertanian</Link></li>
                        <li><Link to="/Peternakan" activeClassName="active"><img src="assets/icon/logo_komoditi/peternakan_logo.svg" /> Peternakan</Link></li>
                        <li><Link to="/Perikanan" activeClassName="active"><img src="assets/icon/logo_komoditi/perikanan_logo.svg" /> Perikanan</Link></li>
                        <li><Link to="/Perindustrian" activeClassName="active"><img src="assets/icon/logo_komoditi/perindustrian_logo.svg" /> Perindustrian</Link></li>
                        <li><Link to="/Pariwisata" activeClassName="active"><img src="assets/icon/logo_komoditi/pariwisata_logo.svg" /> Pariwisata</Link></li>
                        <li><img src="assets/icon/icon_sidebar/line1.png" /></li>
                        <li><b>LAINNYA</b></li>
                        <li><Link to="/saran" activeClassName="active"><img src="assets/icon/icon_sidebar/icon_saran.svg" /> Saran</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;