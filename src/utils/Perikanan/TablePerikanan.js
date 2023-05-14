import React from "react";
import { Button } from "../../components";
import axios from "axios";

export function getTablePerikanan() {
    const deleteHandler = async (id) => {
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.delete(`http://localhost:8000/api/Perikanan/${id}`)
            .then(() => {
                console.log('Sukses Menghapus Data Perikanan');
                const storedData = localStorage.getItem('dataPerikanan');
                const storedDataBeranda = localStorage.getItem('tablePerikanan');
                if (storedData) {
                    localStorage.removeItem('dataPerikanan');
                }
                if(storedDataBeranda) {
                    localStorage.removeItem('tablePerikanan');
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
            name: "Komoditi",
            selector: row => row.komoditi,
            sortable: true
        },
        {
            name: "Volume(Ton)",
            selector: row => row.volume,
            sortable: true
        },
        {
            name: "Nilai Produksi",
            selector: row => row.nilai_produksi,
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
