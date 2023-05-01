import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTablePertanian } from "../../../utils/Pertanian/TablePertnian";
import dataPertanian from "../../../config/pertanian/dataPertanian.json";
import "./DataPertanian.css";
const DataPertanian = () => {

    const [tablePertanian, setDataPertanian] = useState([]);

    useEffect(() => {
        setDataPertanian(dataPertanian);
    }, []);
    return(
        <div className="container-table">
            <DataTable
                columns={getTablePertanian()}
                data={tablePertanian}
            />
        </div>
    )
}
export default DataPertanian;