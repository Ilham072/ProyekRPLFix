import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const SidebarAdminPusat = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

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
            <Link to="/Admin_AdminPusat">
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
                <Link to="/komoditi">
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
            <a href="#">
              <img src="assets/icon/icon_sidebar/icon_keluar.svg" /> Keluar
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SidebarAdminPusat;
