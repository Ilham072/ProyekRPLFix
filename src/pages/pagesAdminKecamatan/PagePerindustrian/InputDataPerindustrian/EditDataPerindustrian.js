
import "./PageInputDataPerindustrian.css";
import SidebarAdmin from '../../../../components/Sidebar/SidebarAdmin';
import HeaderAdmin from '../../../../components/Header/HeaderAdmin';
import DropdownKomoditi from "../../../../components/Dropdown/DropdownKomoditi/DropdownKomoditi";
import LogoApp from '../../../../components/LogoApp/LogoApp';
import InputFormPerindustrian from "../../../../utils/Perindustrian/InputFormPerindustrian";


const EditDataPerindustrian= () => {

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
                <h3>Pendataan || Perindustrian || Edit Data </h3>
                <div className='dropdown-tambah-data-perindustrian'>
                    <DropdownKomoditi/>
                </div>
                <div className='cover_tambah_data_perindustrian'>
                    <h1 className='judul_tambah_data'>Uraian</h1>
                    <InputFormPerindustrian/>
                </div>
                <br/>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
        

    )
}

export default EditDataPerindustrian;