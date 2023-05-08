
import "./PageInputBerita.css";
import HeaderAdmin from '../../../components/Header/HeaderAdmin';
import DropdownKomoditi from "../../../components/Dropdown/DropdownKomoditi/DropdownKomoditi";
import LogoApp from '../../../components/LogoApp/LogoApp';
import DropdownBidang from "../../../components/Dropdown/DropdownBidang/DropdownBidang";
import SidebarAdminPusat from "../../../components/Sidebar/SidebarAdminPusat";
import InputFormBerita from "../../../utils/InputFormBerita";

const PageInputBerita= () => {

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
                <h3>Pendataan || Petertanian || Tambah Data </h3>
                <div className='dropdown-tambah-data-berita'>
                    <DropdownBidang/>
                    <DropdownKomoditi/>
                </div>
                <div className='cover_tambah_data_berita'>
                    <h1 className='judul_tambah_data'>Uraian</h1>
                    <InputFormBerita/>
                </div>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
        

    )
}

export default PageInputBerita;