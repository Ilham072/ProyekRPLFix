import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTableBerandaPertanian } from "../../../utils/Pertanian/TableBerandaPertanian";
import dataPertanian from "../../../config/pertanian/dataPertanian.json";
import "./DataPertanian.css";
const DataBerandaPertanian = () => {

    const [tablePertanian, setDataPertanian] = useState([]);

    useEffect(() => {
        setDataPertanian(dataPertanian);
    }, []);
    return(
        <div className="container-table">
            <DataTable
                columns={getTableBerandaPertanian()}
                data={tablePertanian}
            />
        </div>
    )
}
export default DataBerandaPertanian;