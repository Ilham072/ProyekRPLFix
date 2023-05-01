
import "./PageInputDataPeternakan.css";
import SidebarAdmin from '../../../../components/Sidebar/SidebarAdmin';
import HeaderAdmin from '../../../../components/Header/HeaderAdmin';
import { Button } from "../../../../components";
import LogoApp from '../../../../components/LogoApp/LogoApp';
import DropdownBidang from "../../../../components/Dropdown/DropdownBidang/DropdownBidang";
import InputFormPeternakan from '../../../../utils/Peternakan/InputFormPeternakan';

const PageInputDataPeternakan= () => {

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
                <h3>Pendataan || Petertanian || Tambah Data </h3>
                <div className='dropdown-tambah-data-peternakan'>
                    <DropdownBidang/>
                </div>
                <div className='cover_tambah_data_peternakan'>
                    <h1 className='judul_tambah_data'>Uraian</h1>
                    <InputFormPeternakan/>
                </div>
                <br/>
                <Button className="tambahDataButton" onClick={handleClick}>
                    Tambah Data
                </Button>
            </div>
        {/* <div className='footer'>footer</div> */}
      </div>
        

    )
}

export default PageInputDataPeternakan;