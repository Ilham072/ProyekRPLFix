import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTablePeternakan } from "../../../utils/Peternakan/TablePeternakan";
import dataPeternakan from "../../../config/Peternakan/dataPeternakan.json";
import "../TablePertanian/DataPertanian.css";
import axios from 'axios';

const DataPeternakan = () => {

    const [tablePeternakan, setDataPeternakan] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        async function fetchDataPeternakan() {
            let data;
            const storedData = localStorage.getItem("dataPeternakan");
            if (storedData) {
                data = JSON.parse(storedData);
            } else {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.get('http://localhost:8000/api/PeternakanByKecamatan');
                data = response.data;
                localStorage.setItem('dataPeternakan', JSON.stringify(data));
            }
            setDataPeternakan(data);
        }
        fetchDataPeternakan();
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