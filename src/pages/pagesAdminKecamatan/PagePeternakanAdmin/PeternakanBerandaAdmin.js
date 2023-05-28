import React , { useState , useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LogoApp from "../../../components/LogoApp/LogoApp";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import SidebarAdmin from "../../../components/Sidebar/SidebarAdmin";
import DropdownKecamatan from "../../../components/Dropdown/DropdownKecamatan/DropdownKecamatan";
import DataBerandaPeternakan from "../../../components/Contents/TablePeternakan/DataBerandaPeternakan";
import checkTokenExpiration from "../../../utils/checkTokenExpiration";

const PeternakanBerandaAdmin = () => {
    const [selectedKecamatan, setSelectedKecamatan] = useState("");
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const handleKecamatanChange = (value) => {
        setSelectedKecamatan(value);
    }

    // useEffect(() => {
    //     const isTokenExpired = checkTokenExpiration();
    //     if(isTokenExpired) {
    //         localStorage.clear();
    //         navigate('/login');
    //     }
    // });

    // useEffect(() => {
    //     if(!token) {
    //         navigate('/login')
    //     }
    //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // }, []);
    return(
        <div className='container'>
            <div className='logo'>
                <div>
                    <LogoApp />
                </div>
            </div>
            <div className='header'>
                <div>
                    <HeaderAdmin />
                </div>
            </div>
            <div className='nav'>
                <SidebarAdmin />
            </div>
        
            <div className='content'>
                <div><h3>Beranda Peternakan</h3></div>
                <DropdownKecamatan selectedKecamatan={selectedKecamatan} onKecamatanChange={handleKecamatanChange}/>
                <DataBerandaPeternakan kecamatan={selectedKecamatan}/>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
    )
}
export default PeternakanBerandaAdmin;