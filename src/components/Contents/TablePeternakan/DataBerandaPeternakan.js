import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTableBerandaPeternakan } from "../../../utils/Peternakan/TableBerandaPeternakan";
import dataPeternakan from "../../../config/Peternakan/dataPeternakan.json";
import "../TablePertanian/DataPertanian.css";
const DataBerandaPeternakan = () => {

    const [tablePeternakan, setDataPeternakan] = useState([]);

    useEffect(() => {
        setDataPeternakan(dataPeternakan);
    }, []);
    return(
        <div className="container-table">
            <DataTable
                columns={getTableBerandaPeternakan()}
                data={tablePeternakan}
            />
        </div>
    )
}
export default DataBerandaPeternakan;