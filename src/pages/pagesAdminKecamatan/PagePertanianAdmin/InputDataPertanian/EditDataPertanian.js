
import "./PageInputDataPertanian.css";
import SidebarAdmin from '../../../../components/Sidebar/SidebarAdmin';
import HeaderAdmin from '../../../../components/Header/HeaderAdmin';
import { Button } from "../../../../components";
import DropdownKomoditi from "../../../../components/Dropdown/DropdownKomoditi/DropdownKomoditi";
import InputFormPertanian from "../../../../utils/Pertanian/InputFormPertanian";
import LogoApp from '../../../../components/LogoApp/LogoApp';
import DropdownBidang from "../../../../components/Dropdown/DropdownBidang/DropdownBidang";

const EditDataPertanian= () => {

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
                <SidebarAdmin />
            </div>
        
            <div className='content'>
                <h3>Pendataan || Petertanian || Edit Data </h3>
                <div className='dropdown-tambah-data-pertanian'>
                    <DropdownBidang/>
                    <DropdownKomoditi/>
                </div>
                <div className='cover_tambah_data_pertanian'>
                    <h1 className='judul_tambah_data'>Uraian</h1>
                    <InputFormPertanian/>
                </div>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
        

    )
}

export default EditDataPertanian;