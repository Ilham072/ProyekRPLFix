import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTablePerikanan } from "../../../utils/Perikanan/TablePerikanan";
import dataPerikanan from "../../../config/Perikanan/dataPerikanan.json";
// import "./DataPertanian.css";
const DataPerikanan = () => {

    const [tablePerikanan, setDataPerikanan] = useState([]);

    useEffect(() => {
        setDataPerikanan(dataPerikanan);
    }, []);
    return(
        <div className="container-table">
            <DataTable
                columns={getTablePerikanan()}
                data={tablePerikanan}
            />
        </div>
    )
}
export default DataPerikanan;