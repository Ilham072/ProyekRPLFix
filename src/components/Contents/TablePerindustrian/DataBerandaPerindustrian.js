import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTableBerandaPerindustrian } from "../../../utils/Perindustrian/TableBerandaPerindustrian";
import dataPerindustrian from "../../../config/Perindustrian/dataPerindustrian.json";
import axios from "axios";
// import "./DataPertanian.css";
const DataBerandaPerindustrian = ({kecamatan}) => {
    const token = localStorage.getItem('token');
    const [tablePerindustrian, setDataPerindustrian] = useState([]);

    useEffect(() => {
        async function fetchDataPerindustrian() {
            let data;
            const storedData = localStorage.getItem('tablePerindustrian');
            if (storedData) {
                data = JSON.parse(storedData);
            } else {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.get('http://localhost:8000/api/Perindustrian');
                data = response.data;
                localStorage.setItem('tablePerindustrian', JSON.stringify(data));
            }
            setDataPerindustrian(data);
        }
        fetchDataPerindustrian();
    }, []);

    useEffect(() => {
        if (kecamatan) {
            async function fetchDataByKecamatan() {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.get(`http://localhost:8000/api/Perindustrian?kecamatan=${kecamatan}`);
                const data = response.data;
                setDataPerindustrian(data);
            }
            fetchDataByKecamatan();
        } else {
            const storedData = localStorage.getItem('tablePerindustrian');
            if (storedData) {
                const data = JSON.parse(storedData);
                setDataPerindustrian(data);
            }
        }
    }, [kecamatan]);
    return(
        <div className="container-table">
            <DataTable
                columns={getTableBerandaPerindustrian()}
                data={tablePerindustrian}
            />
        </div>
    )
}
export default DataBerandaPerindustrian;