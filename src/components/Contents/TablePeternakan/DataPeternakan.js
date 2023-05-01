import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTablePeternakan } from "../../../utils/Peternakan/TablePeternakan";
import dataPeternakan from "../../../config/Peternakan/dataPeternakan.json";
import "../TablePertanian/DataPertanian.css";
const DataPeternakan = () => {

    const [tablePeternakan, setDataPeternakan] = useState([]);

    useEffect(() => {
        setDataPeternakan(dataPeternakan);
    }, []);
    return(
        <div className="container-table">
            <DataTable
                columns={getTablePeternakan()}
                data={tablePeternakan}
            />
        </div>
    )
}
export default DataPeternakan;