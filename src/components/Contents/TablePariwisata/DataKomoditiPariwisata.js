import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTableKomoditiPariwisata } from "../../../utils/Pariwisata/TableKomoditiPariwisata";
import daftarKomoditiPariwisata from "../../../config/Pariwisata/daftarKomoditiPariwisata.json";
const DaftarKomoditiPariwisata = () => {

    const [tableKomoditiParwisata, setDaftarKomoditiPariwisata] = useState([]);

    useEffect(() => {
        setDaftarKomoditiPariwisata(daftarKomoditiPariwisata);
    }, []);
    return(
        <div className="container-table2">
            <DataTable
                columns={getTableKomoditiPariwisata()}
                data={tableKomoditiParwisata}
            />
        </div>
    )
}
export default DaftarKomoditiPariwisata;