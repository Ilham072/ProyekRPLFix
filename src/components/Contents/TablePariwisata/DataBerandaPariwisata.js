import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTableBerandaPariwisata } from "../../../utils/Pariwisata/TableBerandaPariwisata"
import dataPariwisata from "../../../config/Pariwisata/dataPariwisata.json";
import axios from 'axios';
// import "./DataPertanian.css";
const DataBerandaPariwisata = ({kecamatan, jenis_wisata}) => {
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
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Pariwisata`);
                data = response.data;
                localStorage.setItem('tablePariwisata', JSON.stringify(data));
            }
            setDataPariwisata(data);
        }
        fetchDataPariwisata();
    }, []);

    useEffect(() => {
        async function fetchDataByKecamatan() {
          if (kecamatan && jenis_wisata) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Pariwisata?kecamatan=${kecamatan}&jenis_wisata=${jenis_wisata}`);
            const data = response.data;
            setDataPariwisata(data);
          } else if (kecamatan) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Pariwisata?kecamatan=${kecamatan}`);
            const data = response.data;
            setDataPariwisata(data);
          } else if (jenis_wisata) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/Pariwisata?jenis_wisata=${jenis_wisata}`);
            const data = response.data;
            setDataPariwisata(data);
          } else {
            const storedData = localStorage.getItem('tablePariwisata');
            if (storedData) {
              const data = JSON.parse(storedData);
              setDataPariwisata(data);
            }
          }
        }
      
        fetchDataByKecamatan();
      }, [kecamatan, jenis_wisata]);
      
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