import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTablePariwisata } from "../../../utils/Pariwisata/TablePariwisata";
import dataPariwisata from "../../../config/Pariwisata/dataPariwisata.json";
import axios from "axios";
// import "./DataPertanian.css";
const DataPariwisata = () => {

    const [tableParwisata, setDataPariwisata] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        async function fetchDataPariwisata() {
            let data;
            const storedData = localStorage.getItem("dataPariwisata");
            if (storedData) {
                data = JSON.parse(storedData);
            } else {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.get('http://localhost:8000/api/PariwisataByKecamatan');
                data = response.data;
                localStorage.setItem('dataPariwisata', JSON.stringify(data));
            }
            setDataPariwisata(data);
        }
        fetchDataPariwisata();
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