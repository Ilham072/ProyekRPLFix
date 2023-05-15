import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTablePertanian } from "../../../utils/Pertanian/TablePertnian";
import dataPertanian from "../../../config/pertanian/dataPertanian.json"
import axios from "axios";
import "./DataPertanian.css";

const DataPertanian = () => {

    const [tablePertanian, setDataPertanian] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        async function fetchDataPertanian() {
            let data;
            const storedData = localStorage.getItem("dataPertanian");
            if (storedData) {
                data = JSON.parse(storedData);
            } else {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.get('http://localhost:8000/api/PertanianByKecamatan');
                data = response.data;
                localStorage.setItem('dataPertanian', JSON.stringify(data));
            }
            setDataPertanian(data);
        }
        fetchDataPertanian();
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