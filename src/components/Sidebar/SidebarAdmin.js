import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Sidebar.css";

const SidebarAdminPusat = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const [showSubnav, setShowSubnav] = useState(false);

  const logoutHandler = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios.post('http://localhost:8000/api/logout')
      .then(() => {
        localStorage.removeItem("token");
        localStorage.clear();
        navigate('/');
      });
  }

  const toggleSubnav = () => {
    setShowSubnav(!showSubnav);
  };

  const closeSubnav = (e) => {
    setShowSubnav(!showSubnav);
  };

  return (
    <div className="sidebar">
      <nav className="navbar">
        <ul>
          <li>
            <b>MENU</b>
          </li>
          <li>
            <Link to="/berandaAdmin" className={window.location.pathname === "/berandaAdmin" ? "active" : ""}>
                <img src={window.location.pathname === "/berandaAdmin" ? "assets/icon/icon_sidebar/icon_beranda_active.svg" : "assets/icon/icon_sidebar/icon_beranda_inactive.svg"} alt="Beranda" /> Beranda
            </Link>
          </li>
          {/* dropdown menu for "Pendataan" */}
          <li
            className={showSubnav ? "dropdown active" : "dropdown"}
            onClick={toggleSubnav}
          >
            <a href="#">
              <img className='sidebar-icon' src="assets/icon/icon_sidebar/icon_pendataan.svg" /> Pendataan <img className="dropdown-icon-sidebar" src="assets/icon/icon_sidebar/icon_dropdown_sidebar.svg"/>
            </a>
            {showSubnav && (
            <ul className="dropdown-menu" onClick={closeSubnav}>
              <li>
                <Link to="/adminpertanian" className={window.location.pathname === "/adminpertanian" ? "active" : ""}>
                    <img src={window.location.pathname === "/adminpertanian" ? "assets/icon/icon_sidebar/icon_pertanian_active.svg" : "assets/icon/icon_sidebar/icon_pertanian_inactive.svg"  } alt="pertanian"/> Pertanian
                </Link>
              </li>
              <li>
                <Link to="/adminpeternakan" className={window.location.pathname === "/adminpeternakan" ? "active" : ""}>
                    <img src={window.location.pathname === "/adminpeternakan" ? "assets/icon/icon_sidebar/icon_peternakan_active.svg" : "assets/icon/icon_sidebar/icon_peternakan_inactive.svg"  } alt="peternakan"/> Peternakan
                </Link>
              </li>
              <li>
                <Link to="/adminperikanan" className={window.location.pathname === "/adminperikanan" ? "active" : ""}>
                    <img src={window.location.pathname === "/adminperikanan" ? "assets/icon/icon_sidebar/icon_perikanan_active.svg" : "assets/icon/icon_sidebar/icon_perikanan_inactive.svg"  } alt="perikanan"/> Perikanan
                </Link>
              </li>
              <li>
                <Link to="/adminperindustrian" className={window.location.pathname === "/adminperindustrian" ? "active" : ""}> 
                    <img src={window.location.pathname === "/adminperindustrian" ? "assets/icon/icon_sidebar/icon_perindustrian_active.svg" : "assets/icon/icon_sidebar/icon_perindustrian_inactive.svg"  } alt="perindustrian"/> Perindustrian
                </Link>
              </li>
              <li>
                <Link to="/adminpariwisata" className={window.location.pathname === "/adminpariwisata" ? "active" : ""}>
                    <img src={window.location.pathname === "/adminpariwisata" ? "assets/icon/icon_sidebar/icon_pariwisata_active.svg" : "assets/icon/icon_sidebar/icon_pariwisata_inactive.svg"  } alt="pariwisata"/> Pariwisata
                </Link>
              </li>
            </ul>
            )}
          </li>
          {/* end of dropdown menu for "Pendataan" */}
          <li>
            <Link to="/laporan" className={window.location.pathname === "/laporan" ? "active" : ""}>
                <img src={window.location.pathname === "/laporan" ? "assets/icon/icon_sidebar/icon_laporan_active.svg" : "assets/icon/icon_sidebar/icon_laporan.svg"  } alt="laporan"/> Laporan
            </Link>
          </li>
          <li>
            <img className='sidebar-icon' src="assets/icon/icon_sidebar/line1.png"/>

          </li>
          <li>
            <Link to="/saranAdmin" className={window.location.pathname === "/saranAdmin" ? "active" : ""}>
                <img src={window.location.pathname === "/saranAdmin" ? "assets/icon/icon_sidebar/icon_saran_active.svg" : "assets/icon/icon_sidebar/icon_saran.svg"} alt="Saran" /> Saran
            </Link>
          </li>
         

          <li>
          <a href="#" onClick={logoutHandler}>
              <img className='sidebar-icon' src="assets/icon/icon_sidebar/icon_keluar.svg" /> Keluar
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SidebarAdminPusat;
