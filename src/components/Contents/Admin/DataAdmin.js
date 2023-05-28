import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { getTableAdmin } from "../../../utils/TableAdmin";
import AdminData from "../../../config/Admin/AdminData.json";
import "../TablePertanian/DataPertanian.css";
const DataAdmin = () => {
    const [tableAdmin, setDataAdmin] = useState([]);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchDataAdmin() {
            let data;
            const storedData = localStorage.getItem("dataAdmin");
            if (storedData) {
                data = JSON.parse(storedData);
            } else {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.get('http://localhost:8000/api/Admin');
                data = response.data;
                localStorage.setItem('dataAdmin', JSON.stringify(data));
            }
            setDataAdmin(data);
        }
        fetchDataAdmin();
    }, []);
    return(
        <div className="container-table">
            <DataTable
                columns={getTableAdmin(navigate)}
                data={tableAdmin}
            />
        </div>
    )
}
export default DataAdmin;