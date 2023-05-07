import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTableBerandaPariwisata } from "../../../utils/Pariwisata/TableBerandaPariwisata"
import dataPariwisata from "../../../config/Pariwisata/dataPariwisata.json";
// import "./DataPertanian.css";
const DataBerandaPariwisata = () => {

    const [tableParwisata, setDataPariwisata] = useState([]);

    useEffect(() => {
        setDataPariwisata(dataPariwisata);
    }, []);
    return(
        <div className="container-table">
            <DataTable
                columns={getTableBerandaPariwisata()}
                data={tableParwisata}
            />
        </div>
    )
}
export default DataBerandaPariwisata;