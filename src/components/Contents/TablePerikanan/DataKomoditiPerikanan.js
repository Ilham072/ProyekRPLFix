import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTableKomoditiPerikanan } from "../../../utils/Perikanan/TableKomoditiPerikanan";
import daftarKomoditiPerikanan from "../../../config/Perikanan/daftarKomoditiPerikanan.json";
const DaftarKomoditiPerikanan = () => {

    const [tableKomoditiPerikanan, setDaftarKomoditiPerikanan] = useState([]);

    useEffect(() => {
        setDaftarKomoditiPerikanan(daftarKomoditiPerikanan);
    }, []);
    return(
        <div className="container-table2">
            <DataTable
                columns={getTableKomoditiPerikanan()}
                data={tableKomoditiPerikanan}
            />
        </div>
    )
}
export default DaftarKomoditiPerikanan;