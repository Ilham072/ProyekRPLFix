import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTableKomoditiPeternakan } from "../../../utils/Peternakan/TableKomoditiPeternakan";
import daftarKomoditiPeternakan from "../../../config/Peternakan/daftarKomoditiPeternakan.json";
const DaftarKomoditiPeternakan = () => {

    const [tableKomoditiPeternakan, setDaftarKomoditiPeternakan] = useState([]);

    useEffect(() => {
        setDaftarKomoditiPeternakan(daftarKomoditiPeternakan);
    }, []);
    return(
        <div className="container-table2">
            <DataTable
                columns={getTableKomoditiPeternakan()}
                data={tableKomoditiPeternakan}
            />
        </div>
    )
}
export default DaftarKomoditiPeternakan;