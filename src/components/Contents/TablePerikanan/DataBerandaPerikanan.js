import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTableBerandaPerikanan } from "../../../utils/Perikanan/TableBerandaPeriknan";
import dataPerikanan from "../../../config/Perikanan/dataPerikanan.json";
// import "./DataPertanian.css";
import axios from "axios";
const DataPerikanan = ({kecamatan}) => {
    const token = localStorage.getItem('token');
    const [tablePerikanan, setDataPerikanan] = useState([]);

    useEffect(() => {
        async function fetchDataPerikanan() {
            let data;
            const storedData = localStorage.getItem('tablePerikanan');
            if (storedData) {
                data = JSON.parse(storedData);
            } else {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.get('http://localhost:8000/api/Perikanan');
                data = response.data;
                localStorage.setItem('tablePerikanan', JSON.stringify(data));
            }
            setDataPerikanan(data);
        }
        fetchDataPerikanan();
    }, []);

    useEffect(() => {
        if (kecamatan) {
            async function fetchDataByKecamatan() {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.get(`http://localhost:8000/api/Perikanan?kecamatan=${kecamatan}`);
                const data = response.data;
                setDataPerikanan(data);
            }
            fetchDataByKecamatan();
        } else {
            const storedData = localStorage.getItem('tablePerikanan');
            if (storedData) {
                const data = JSON.parse(storedData);
                setDataPerikanan(data);
            }
        }
    }, [kecamatan]);
    return(
        <div className="container-table">
            <DataTable
                columns={getTableBerandaPerikanan()}
                data={tablePerikanan}
            />
        </div>
    )
}
export default DataPerikanan;