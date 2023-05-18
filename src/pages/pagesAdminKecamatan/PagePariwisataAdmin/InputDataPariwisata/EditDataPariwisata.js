
import "./PageInputDataPariwisata.css";
import SidebarAdmin from '../../../../components/Sidebar/SidebarAdmin';
import HeaderAdmin from '../../../../components/Header/HeaderAdmin';
import { Button } from "../../../../components";
import LogoApp from '../../../../components/LogoApp/LogoApp';
import InputFormPariwisata from "../../../../utils/Pariwisata/InputFormPariwisata";


const EditDataPariwisata= () => {

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
                <h3>Pendataan || Pariwisata || Edit Data </h3>
                <div className='dropdown-tambah-data-pariwisata'>
                   
                </div>
                <div className='cover_tambah_data_pariwisata'>
                    <h1 className='judul_tambah_data'>Uraian</h1>
                    <InputFormPariwisata/>
                </div>
                <br/>
                
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
        

    )
}

export default EditDataPariwisata;