import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTablePariwisata } from "../../../utils/Pariwisata/TablePariwisata";
import dataPariwisata from "../../../config/Pariwisata/dataPariwisata.json";
// import "./DataPertanian.css";
const DataPariwisata = () => {

    const [tableParwisata, setDataPariwisata] = useState([]);

    useEffect(() => {
        setDataPariwisata(dataPariwisata);
    }, []);
    return(
        <div className="container-table">
            <DataTable
                columns={getTablePariwisata()}
                data={tableParwisata}
            />
        </div>
    )
}
export default DataPariwisata;