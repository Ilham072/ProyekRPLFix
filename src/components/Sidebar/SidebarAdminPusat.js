import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SidebarAdminPusat.css";

const SidebarAdminPusat = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const [showSubnav, setShowSubnav] = useState(false);

  const [isActive, setIsActive] = useState(false);

  const logoutHandler = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios.post(`${process.env.REACT_APP_API_URL}/api/logout`)
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
            <Link to="/berandaAdminPusat" className={window.location.pathname === "/berandaAdminPusat" ? "active" : ""}>
                <img src={window.location.pathname === "/berandaAdminPusat" ? "assets/icon/icon_sidebar/icon_beranda_active.svg" : "assets/icon/icon_sidebar/icon_beranda_inactive.svg"} alt="Beranda" /> Beranda
            </Link>
          </li>
          <li>
            <Link to="/DataAdminPusat" className={window.location.pathname === "/DataAdminPusat" ? "active" : ""}>
                <img src={window.location.pathname === "/DataAdminPusat" ? "assets/icon/icon_sidebar/icon_pendataan_active.svg" : "assets/icon/icon_sidebar/icon_pendataan.svg"} alt="Data" /> Data
            </Link>
          </li>
          <li>
            <Link to="/dataAdmin" className={window.location.pathname === "/dataAdmin" ? "active" : ""}>
                <img src={window.location.pathname === "/dataAdmin" ? "assets/icon/icon_sidebar/icon_admin_active.svg" : "assets/icon/icon_sidebar/icon_admin_inactive.svg"} alt="Admin" /> Admin
            </Link>
          </li>
          {/* dropdown menu for "Konten" */}
          <li
            className={showSubnav ? "dropdown active" : "dropdown"}
            onClick={toggleSubnav}
          >
            <a href="#">
                <img src={isActive ? "assets/icon/icon_sidebar/icon_konten_active.svg" : "assets/icon/icon_sidebar/icon_konten_inactive.svg"} alt="Konten" /> Konten <img className="dropdown-icon-sidebar-pusat" src="assets/icon/icon_sidebar/icon_dropdown_sidebar.svg" />
            </a>
            {showSubnav && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/banner" className={window.location.pathname === "/banner" ? "active" : ""} onClick={closeSubnav}>
                      <img src={window.location.pathname === "/banner" ? "assets/icon/icon_sidebar/icon_banner_active.svg" : "assets/icon/icon_sidebar/icon_banner.svg"} alt="Banner" /> Banner
                  </Link>
                </li>
                <li>
                  <Link to="/berita" className={window.location.pathname === "/berita" ? "active" : ""} onClick={closeSubnav}>
                      <img src={window.location.pathname === "/berita" ? "assets/icon/icon_sidebar/icon_berita_active.svg" : "assets/icon/icon_sidebar/icon_berita.svg"} alt="Berita" /> Berita
                  </Link>
                </li>
                <li>
                  <Link to="/kontenKomoditi" className={window.location.pathname === "/kontenKomoditi" ? "active" : ""} onClick={closeSubnav}>
                      <img src={window.location.pathname === "/kontenKomoditi" ? "assets/icon/icon_sidebar/icon_komoditi_active.svg" : "assets/icon/icon_sidebar/icon_komoditi.svg"} alt="Komoditi" /> Komoditi
                  </Link>
                </li>
              </ul>
            )}
          </li>
          {/* end of dropdown menu for "Konten" */}
          <li>
            <Link to="/laporanPusat" className={window.location.pathname === "/laporanPusat" ? "active" : ""}>
                <img src={window.location.pathname === "/laporanPusat" ? "assets/icon/icon_sidebar/icon_laporan_active.svg" : "assets/icon/icon_sidebar/icon_laporan.svg"} alt="Laporan" /> Laporan
            </Link>
          </li>
          <li>
            <img className='sidebar-icon' src="assets/icon/icon_sidebar/line1.png"/>

          </li>
          <li>
            <Link to="/saranAdminPusat" className={window.location.pathname === "/saranAdminPusat" ? "active" : ""}>
                <img src={window.location.pathname === "/saranAdminPusat" ? "assets/icon/icon_sidebar/icon_saran_active.svg" : "assets/icon/icon_sidebar/icon_saran.svg"} alt="Saran" /> Saran
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
