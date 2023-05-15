
import "./PageInputAdmin.css";
import HeaderAdmin from '../../../components/Header/HeaderAdmin';
import LogoApp from '../../../components/LogoApp/LogoApp';
import SidebarAdminPusat from "../../../components/Sidebar/SidebarAdminPusat";
import InputFormAdmin from "../../../utils/InputFormAdmin";

const PageInputAdmin= () => {

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
                <h3> Admin|| Tambah Data </h3>
                <div className='cover_tambah_data_admin'>
                    <h1 className='judul_tambah_data'>Uraian</h1>
                    <InputFormAdmin/>
                </div>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
        

    )
}

export default PageInputAdmin;