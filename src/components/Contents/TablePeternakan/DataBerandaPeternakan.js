import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTableBerandaPeternakan } from "../../../utils/Peternakan/TableBerandaPeternakan";
import dataPeternakan from "../../../config/Peternakan/dataPeternakan.json";
import "../TablePertanian/DataPertanian.css";
import axios from "axios";
const DataBerandaPeternakan = ({kecamatan}) => {
    const [tablePeternakan, setDataPeternakan] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        async function fetchDataPeternakan() {
            let data;
            const storedData = localStorage.getItem('tablePeternakan');
            if (storedData) {
                data = JSON.parse(storedData);
            } else {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.get('http://localhost:8000/api/Peternakan');
                data = response.data;
                localStorage.setItem('tablePeternakan', JSON.stringify(data));
            }
            setDataPeternakan(data);
        }
        fetchDataPeternakan();
    }, []);

    useEffect(() => {
        if (kecamatan) {
            async function fetchDataByKecamatan() {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.get(`http://localhost:8000/api/Peternakan?kecamatan=${kecamatan}`);
                const data = response.data;
                setDataPeternakan(data);
            }
            fetchDataByKecamatan();
        } else {
            const storedData = localStorage.getItem('tablePeternakan');
            if (storedData) {
                const data = JSON.parse(storedData);
                setDataPeternakan(data);
            }
        }
    }, [kecamatan]);
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