import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTableBerandaPerindustrian } from "../../../utils/Perindustrian/TableBerandaPerindustrian";
import dataPerindustrian from "../../../config/Perindustrian/dataPerindustrian.json";
// import "./DataPertanian.css";
const DataBerandaPerindustrian = () => {

    const [tablePerindustrian, setDataPerindustrian] = useState([]);

    useEffect(() => {
        setDataPerindustrian(dataPerindustrian);
    }, []);
    return(
        <div className="container-table">
            <DataTable
                columns={getTableBerandaPerindustrian()}
                data={tablePerindustrian}
            />
        </div>
    )
}
export default DataBerandaPerindustrian;