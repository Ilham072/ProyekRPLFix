
import "./PageInputDataPerindustrian.css";
import SidebarAdmin from '../../../../components/Sidebar/SidebarAdmin';
import HeaderAdmin from '../../../../components/Header/HeaderAdmin';
import { Button } from "../../../../components";
import DropdownKomoditi from "../../../../components/Dropdown/DropdownKomoditi/DropdownKomoditi";
import InputFormPertanian from "../../../../utils/Pertanian/InputFormPertanian";
import LogoApp from '../../../../components/LogoApp/LogoApp';
import InputFormPerindustrian from "../../../../utils/Perindustrian/InputFormPerindustrian";


const PageInputDataPertanian= () => {

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
                <h3>Pendataan || Perindustrian || Tambah Data </h3>
                <div className='dropdown-tambah-data-perindustrian'>
                    <DropdownKomoditi/>
                </div>
                <div className='cover_tambah_data_perindustrian'>
                    <h1 className='judul_tambah_data'>Uraian</h1>
                    <InputFormPerindustrian/>
                </div>
                <br/>
                <Button className="tambahDataButton">
                    Tambah Data
                </Button>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
        

    )
}

export default PageInputDataPertanian;