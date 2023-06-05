import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="navbar">
        <ul>
          <li>
            <b>MENU</b>
          </li>
              <li>
                <Link to="/" className={window.location.pathname === "/" ? "active" : ""}>
                    <img src={window.location.pathname === "/" ? "assets/icon/icon_sidebar/icon_beranda_active.svg" : "assets/icon/icon_sidebar/icon_beranda_inactive.svg"} alt="Beranda" /> Beranda
                </Link>
              </li>
              <li>
                <Link to="/pertanian" className={window.location.pathname === "/pertanian" ? "active" : ""}>
                    <img src={window.location.pathname === "/pertanian" ? "assets/icon/icon_sidebar/icon_pertanian_active.svg" : "assets/icon/icon_sidebar/icon_pertanian_inactive.svg"  } alt="pertanian"/> Pertanian
                </Link>
              </li>
              <li>
                <Link to="/peternakan" className={window.location.pathname === "/peternakan" ? "active" : ""}>
                    <img src={window.location.pathname === "/peternakan" ? "assets/icon/icon_sidebar/icon_peternakan_active.svg" : "assets/icon/icon_sidebar/icon_peternakan_inactive.svg"  } alt="peternakan"/> Peternakan
                </Link>
              </li>
              <li>
                <Link to="/perikanan" className={window.location.pathname === "/perikanan" ? "active" : ""}>
                    <img src={window.location.pathname === "/perikanan" ? "assets/icon/icon_sidebar/icon_perikanan_active.svg" : "assets/icon/icon_sidebar/icon_perikanan_inactive.svg"  } alt="perikanan"/> Perikanan
                </Link>
              </li>
              <li>
                <Link to="/perindustrian" className={window.location.pathname === "/perindustrian" ? "active" : ""}> 
                    <img src={window.location.pathname === "/perindustrian" ? "assets/icon/icon_sidebar/icon_perindustrian_active.svg" : "assets/icon/icon_sidebar/icon_perindustrian_inactive.svg"  } alt="perindustrian"/> Perindustrian
                </Link>
              </li>
              <li>
                <Link to="/pariwisata" className={window.location.pathname === "/pariwisata" ? "active" : ""}>
                    <img src={window.location.pathname === "/pariwisata" ? "assets/icon/icon_sidebar/icon_pariwisata_active.svg" : "assets/icon/icon_sidebar/icon_pariwisata_inactive.svg"  } alt="pariwisata"/> Pariwisata
                </Link>
              </li>
          <li>
            <img src="assets/icon/icon_sidebar/line1.png" />
          </li>
          <li>
            <b>LAINNYA</b>
          </li>
          <li>
            <Link to="/saran" className={window.location.pathname === "/saran" ? "active" : ""}>
                <img src={window.location.pathname === "/saran" ? "assets/icon/icon_sidebar/icon_saran_active.svg" : "assets/icon/icon_sidebar/icon_saran.svg"} alt="Saran" /> Saran
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
