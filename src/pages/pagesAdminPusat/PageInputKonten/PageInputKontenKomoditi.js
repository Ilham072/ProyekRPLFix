import "./PageInputKontenKomoditi.css";
import HeaderAdmin from '../../../components/Header/HeaderAdmin';
import DropdownKomoditi from "../../../components/Dropdown/DropdownKomoditi/DropdownKomoditi";
import LogoApp from '../../../components/LogoApp/LogoApp';
import DropdownSektor from "../../../components/Dropdown/DropdownSektor/DropdownSektor";
import SidebarAdminPusat from "../../../components/Sidebar/SidebarAdminPusat";
import InputFormKontenKomoditi from "../../../utils/InputFormKontenKomoditi";

const PageInputKontenKomoditi= () => {

    const handleClick = (event) =>{
        console.log(event);
    }
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
                <SidebarAdminPusat />
            </div>

            <div className='content'>
                <div className='dropdown-tambah-konten-komoditi'>
                    <DropdownSektor/>
                    <DropdownKomoditi/>
                </div>
                <div className='cover_tambah_konten_komoditi'>
                    <h1 className='judul_tambah_konten_komoditi'></h1>
                    <InputFormKontenKomoditi/>
                </div>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>


    )
}

export default PageInputKontenKomoditi;