import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTableBerandaPerikanan } from "../../../utils/Perikanan/TableBerandaPeriknan";
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
                columns={getTableBerandaPerikanan()}
                data={tablePerikanan}
            />
        </div>
    )
}
export default DataPerikanan;