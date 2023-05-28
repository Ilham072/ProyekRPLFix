import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTableBerandaPertanian } from "../../../utils/Pertanian/TableBerandaPertanian";
import axios from "axios";
import dataPertanian from "../../../config/pertanian/dataPertanian.json";
import "./DataPertanian.css";
const DataBerandaPertanian = ({kecamatan, bidang}) => {
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
    }, []);
    
    useEffect(() => {
        async function fetchDataByKecamatan() {
            if (kecamatan && bidang) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.get(`http://localhost:8000/api/Pertanian?kecamatan=${kecamatan}&bidang=${bidang}`);
                const data = response.data;
                setDataPertanian(data);
            } else if (kecamatan) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.get(`http://localhost:8000/api/Pertanian?kecamatan=${kecamatan}`);
                const data = response.data;
                setDataPertanian(data);
            } else if (bidang) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.get(`http://localhost:8000/api/Pertanian?bidang=${bidang}`);
                const data = response.data;
                setDataPertanian(data);
            } else {
                const storedData = localStorage.getItem('tablePertanian');
                if (storedData) {
                    const data = JSON.parse(storedData);
                    setDataPertanian(data);
                }
            }
        }
    
        fetchDataByKecamatan();
    }, [kecamatan, bidang]);
    

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