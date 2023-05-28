import React from "react";
import { Button } from "../../components";
import axios from "axios";

export function getTableKomoditiPerindustrian() {
    const deleteHandler = async (id) => {
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.delete(`http://localhost:8000/api/Komoditi/${id}`)
            .then(() => {
                console.log('Sukses Menghapus Data Komoditi');
                const storedData = localStorage.getItem('dataKomoditi');
                if (storedData) {
                    localStorage.removeItem('dataKomoditi');
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
            selector: row => row.nama,
            sortable: true
        },
        {
            name: "",
            selector: row => (
                <div>
                    <Button className="btn-delete" onClick={() => deleteHandler(row.id)}><img src="assets/icon/button/button-delete.svg"/></Button>
                </div>
            ),
            sortable: true
        }
    ];
}
