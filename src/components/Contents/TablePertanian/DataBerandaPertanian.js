import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTableBerandaPertanian } from "../../../utils/Pertanian/TableBerandaPertanian";
import axios from "axios";
import dataPertanian from "../../../config/pertanian/dataPertanian.json";
import "./DataPertanian.css";
const DataBerandaPertanian = ({kecamatan}) => {
    const [tablePertanian, setDataPertanian] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        async function fetchDataPertanian() {
            let data;
            const storedData = localStorage.getItem('tablePertanian');
            if (storedData) {
                data = JSON.parse(storedData);
            } else {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.get('http://localhost:8000/api/Pertanian');
                data = response.data;
                localStorage.setItem('tablePertanian', JSON.stringify(data));
            }
            setDataPertanian(data);
        }
        fetchDataPertanian();
    }, [])

    useEffect(() => {
        if (kecamatan) {
            async function fetchDataByKecamatan() {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.get(`http://localhost:8000/api/Pertanian?kecamatan=${kecamatan}`);
                const data = response.data;
                setDataPertanian(data);
            }
            fetchDataByKecamatan();
        } else {
            const storedData = localStorage.getItem('tablePertanian');
            if (storedData) {
                const data = JSON.parse(storedData);
                setDataPertanian(data);
            }
        }
    }, [kecamatan]);

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