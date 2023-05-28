import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Sidebar.css";

const SidebarAdmin = () => {
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
            <Link to="/berandaAdmin">
              <img src="assets/icon/icon_sidebar/icon_beranda.svg" /> Beranda
            </Link>
          </li>
          {/* dropdown menu for "Pendataan" */}
          <li
            className={showDropdown ? "dropdown active" : "dropdown"}
            onClick={toggleDropdown}
          >
            <a href="#">
              <img src="assets/icon/icon_sidebar/icon_pendataan.svg" /> Pendataan
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link to="/adminpertanian">
                  <img src="assets/icon/logo_komoditi/pertanian_logo.svg" /> Pertanian
                </Link>
              </li>
              <li>
                <Link to="/adminpeternakan">
                  <img src="assets/icon/logo_komoditi/peternakan_logo.svg" /> Peternakan
                </Link>
              </li>
              <li>
                <Link to="/adminperikanan">
                  <img src="assets/icon/logo_komoditi/perikanan_logo.svg" /> Perikanan
                </Link>
              </li>
              <li>
                <Link to="/adminperindustrian">
                  <img src="assets/icon/logo_komoditi/perindustrian_logo.svg" /> Perindustrian
                </Link>
              </li>
              <li>
                <Link to="/adminpariwisata">
                  <img src="assets/icon/logo_komoditi/pariwisata_logo.svg" /> Pariwisata
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
            <Link to="/saranAdmin">
              <img src="assets/icon/icon_sidebar/icon_saran.svg" /> Saran
            </Link>
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

export default SidebarAdmin;
