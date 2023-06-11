import React from "react";
import { Button } from "../../components";
import axios from "axios";

export function getTablePerindustrian(navigateToEdit) {
    const deleteHandler = async (id) => {
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.delete(`${process.env.REACT_APP_API_URL}/api/Perindustrian/${id}`)
            .then(() => {
                console.log('Sukses Menghapus Data Perindustrian');
                const storedData = localStorage.getItem('dataPerindustrian');
                const storedDataBeranda = localStorage.getItem('tablePerindustrian');
                if (storedData) {
                    localStorage.removeItem('dataPerindustrian');
                }
                if(storedDataBeranda) {
                    localStorage.removeItem('tablePerindustrian');
                }
                window.location.reload(false);
            })
    }

    const handleEdit = (row) => {
        const queryParam = encodeURIComponent(row.id);
        navigateToEdit(`/editDataPerindustrian?id=${queryParam}`);
    };

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
            name: "Potensi Kandungan",
            selector: row => row.potensi_kandungan,
            sortable: true
        },
        {
            name: "",
            selector: row => (
                <div>
                    <Button className="btn-edit" onClick={() => handleEdit(row)}><img src="assets/icon/button/button-edit.svg"/></Button>
                    <Button className="btn-delete" onClick={() => deleteHandler(row.id)}><img src="assets/icon/button/button-delete.svg"/></Button>
                </div>
            ),
            sortable: true
        }
    ];
}
