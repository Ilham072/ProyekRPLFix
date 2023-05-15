import React from "react";
import { Button } from "../../components";
import axios from "axios";

export function getTablePariwisata() {
    const deleteHandler = async (id) => {
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.delete(`http://localhost:8000/api/Pariwisata/${id}`)
            .then(() => {
                console.log('Sukses Menghapus Data Pariwisata');
                const storedData = localStorage.getItem('dataPariwisata');
                const storedDataBeranda = localStorage.getItem('tablePertanian');
                if (storedData) {
                    localStorage.removeItem('dataPariwisata');
                }
                if(storedDataBeranda) {
                    localStorage.removeItem('tablePariwisata');
                }
                window.location.reload(false);
            })
    }
    return [
        {
            name: "No",
            cell: (row, index) => <div>{index + 1}</div>,
            sortable: true
        },
        {
            name: "Nama Wisata",
            selector: row => row.nama_wisata,
            sortable: true
        },
        {
            name: "Jenis Wisata",
            selector: row => row.jenis_wisata,
            sortable: true
        },
        {
            name: "Desa",
            selector: row => row.desa,
            sortable: true
        },
        {
            name: "Wisatawan",
            selector: row => row.wisatawan,
            sortable: true
        },
        {
            name: "",
            selector: row => (
                <div>
                    <Button className="btn-edit"><img src="assets/icon/button/button-edit.svg"/></Button>
                    <Button className="btn-delete" onClick={() => deleteHandler(row.id)}><img src="assets/icon/button/button-delete.svg"/></Button>
                </div>
            ),
            sortable: true
        }
    ];
}
