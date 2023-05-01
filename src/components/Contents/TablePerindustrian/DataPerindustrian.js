import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTablePerindustrian } from "../../../utils/Perindustrian/TablePerindustrian";
import dataPerindustrian from "../../../config/Perindustrian/dataPerindustrian.json";
// import "./DataPertanian.css";
const DataPerindustrian = () => {

    const [tablePerindustrian, setDataPerindustrian] = useState([]);

    useEffect(() => {
        setDataPerindustrian(dataPerindustrian);
    }, []);
    return(
        <div className="container-table">
            <DataTable
                columns={getTablePerindustrian()}
                data={tablePerindustrian}
            />
        </div>
    )
}
export default DataPerindustrian;