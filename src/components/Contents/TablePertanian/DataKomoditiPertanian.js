import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTableKomoditiPertanian } from "../../../utils/Pertanian/TableKomoditiPertanian";
import daftarKomoditiPertanian from "../../../config/pertanian/daftarKomoditiPertanian.json";
const DaftarKomoditiPertanian = () => {

    const [tableKomoditiPertanian, setDaftarKomoditiPertanian] = useState([]);

    useEffect(() => {
        setDaftarKomoditiPertanian(daftarKomoditiPertanian);
    }, []);
    return(
        <div className="container-table2">
            <DataTable
                columns={getTableKomoditiPertanian()}
                data={tableKomoditiPertanian}
            />
        </div>
    )
}
export default DaftarKomoditiPertanian;