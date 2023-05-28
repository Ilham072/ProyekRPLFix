import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Sidebar.css";

const SidebarAdminPusat = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const logoutHandler = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios.post('http://localhost:8000/api/logout')
      .then(() => {
        localStorage.removeItem("token");
        localStorage.clear();
        navigate('/');
      });
  }

  return (
    <div className="sidebar">
      <nav className="navbar">
        <ul>
          <li>
            <b>MENU</b>
          </li>
          <li>
            <Link to="/berandaAdminPusat">
              <img src="assets/icon/icon_sidebar/icon_beranda.svg" /> Beranda
            </Link>
          </li>
          <li>
            <Link to="/DataAdminPusat">
              <img src="assets/icon/icon_sidebar/icon_pendataan.svg" /> Data
            </Link>
          </li>
          <li>
            <Link to="/dataAdmin">
              <img src="assets/icon/icon_sidebar/icon_admin.svg" /> Admin
            </Link>
          </li>
          {/* dropdown menu for "Konten" */}
          <li
            className={showDropdown ? "dropdown active" : "dropdown"}
            onClick={toggleDropdown}
          >
            <a href="#">
              <img src="assets/icon/icon_sidebar/icon_konten.svg" /> Konten
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link to="/banner">
                  <img src="assets/icon/icon_sidebar/icon_banner.svg" /> Banner
                </Link>
              </li>
              <li>
                <Link to="/berita">
                  <img src="assets/icon/icon_sidebar/icon_berita.svg" /> Berita
                </Link>
              </li>
              <li>
                <Link to="/kontenKomoditi">
                  <img src="assets/icon/icon_sidebar/icon_komoditi.svg" /> Komoditi
                </Link>
              </li>
            </ul>
          </li>
          {/* end of dropdown menu for "Pendataan" */}
          <li>
            <Link to="/laporan">
              <img src="assets/icon/icon_sidebar/icon_laporan.svg" /> Laporan
            </Link>
          </li>
          <li>
            <img src="assets/icon/icon_sidebar/line1.png" />
          </li>
          <li>
            <a href="#">
              <img src="assets/icon/icon_sidebar/icon_saran.svg" /> Saran
            </a>
          </li>
          <li>
          <a href="#" onClick={logoutHandler}>
              <img src="assets/icon/icon_sidebar/icon_keluar.svg" /> Keluar
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SidebarAdminPusat;
