import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTableBerandaPertanian } from "../../../utils/Pertanian/TableBerandaPertanian";
import axios from "axios";
import dataPertanian from "../../../config/pertanian/dataPertanian.json";
import "./DataPertanian.css";
const DataBerandaPertanian = ({kecamatan, bidang, tahun}) => {
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
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Pertanian`);
                data = response.data;
                localStorage.setItem('tablePertanian', JSON.stringify(data));
            }
            setDataPertanian(data);
        }
        if (tahun) {
            fetchDataKomoditi(tahun)
        } else {
            fetchDataPertanian();
        }
    }, [tahun]);

    const fetchDataKomoditi = async (tahun = false) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        if (tahun) {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Pertanian/${tahun}`);
                setDataPertanian(response.data);
            } catch (e) {
                console.log(e);
            }
        } else {
            tahun = new Date().getFullYear();
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Pertanian/${tahun}`);
                setDataPertanian(response.data);
            } catch (e) {
                console.log(e);
            }
        }
    }

    // useEffect(() => {
    //     if (sektor && tahun) {
    //         fetchDataKomoditi(sektor, tahun)
    //     } else if (sektor) {
    //         fetchDataKomoditi(sektor)
    //     }
    // }, [sektor, tahun])
    
    useEffect(() => {
        async function fetchDataByKecamatan() {
            if (kecamatan && bidang) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Pertanian?kecamatan=${kecamatan}&bidang=${bidang}`);
                const data = response.data;
                setDataPertanian(data);
            } else if (kecamatan) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Pertanian?kecamatan=${kecamatan}`);
                const data = response.data;
                setDataPertanian(data);
            } else if (bidang) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Pertanian?bidang=${bidang}`);
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