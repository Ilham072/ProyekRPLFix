import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTableKomoditiPerindustrian } from "../../../utils/Perindustrian/TableKomoditiPerindustrian";
import daftarKomoditiPerindustrian from "../../../config/Perindustrian/daftarKomoditiPerindustrian.json";
const DaftarKomoditiPerindustrian = () => {

    const [tableKomoditiPerindustrian, setDaftarKomoditiPerindustrian] = useState([]);

    useEffect(() => {
        setDaftarKomoditiPerindustrian(daftarKomoditiPerindustrian);
    }, []);
    return(
        <div className="container-table2">
            <DataTable
                columns={getTableKomoditiPerindustrian()}
                data={tableKomoditiPerindustrian}
            />
        </div>
    )
}
export default DaftarKomoditiPerindustrian;