import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTableBerandaPariwisata } from "../../../utils/Pariwisata/TableBerandaPariwisata"
import dataPariwisata from "../../../config/Pariwisata/dataPariwisata.json";
import axios from 'axios';
// import "./DataPertanian.css";
const DataBerandaPariwisata = ({kecamatan}) => {
    const token = localStorage.getItem('token');
    const [tableParwisata, setDataPariwisata] = useState([]);

    useEffect(() => {
        async function fetchDataPariwisata() {
            let data;
            const storedData = localStorage.getItem('tablePariwisata');
            if (storedData) {
                data = JSON.parse(storedData);
            } else {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.get('http://localhost:8000/api/Pariwisata');
                data = response.data;
                localStorage.setItem('tablePariwisata', JSON.stringify(data));
            }
            setDataPariwisata(data);
        }
        fetchDataPariwisata();
    }, []);

    useEffect(() => {
        if (kecamatan) {
            async function fetchDataByKecamatan() {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.get(`http://localhost:8000/api/Pariwisata?kecamatan=${kecamatan}`);
                const data = response.data;
                setDataPariwisata(data);
            }
            fetchDataByKecamatan();
        } else {
            const storedData = localStorage.getItem('tablePariwisata');
            if (storedData) {
                const data = JSON.parse(storedData);
                setDataPariwisata(data);
            }
        }
    }, [kecamatan]);
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