import { Button } from "../components";
import React from "react";
import axios from "axios";

export function getTableAdmin(navigateToEdit) {
    const deleteHandler = async (id) => {
        const token = localStorage.getItem('token');
        await axios.delete(`http://localhost:8000/api/Admin/${id}`)
            .then(() => {
                console.log('Sukses Menghapus Data Admin');
                const storedData = localStorage.getItem('dataAdmin');
                if (storedData) {
                    localStorage.removeItem('dataAdmin');
                }
                window.location.reload(false);
            })
    }
    const handleEdit = (row) => {
        const queryParam = encodeURIComponent(row.id);
        navigateToEdit(`/editAdmin?id=${queryParam}`);
    }
    return [
        {
            name: "No",
            cell: (row, index) => <div>{index + 1}</div>,
            sortable: true
        },
        {
            name: "Nama Lengkap",
            selector: row => row.name,
            sortable: true
        },
        {
            name: "Kecamatan",
            selector: row => row.kecamatan,
            sortable: true
        },
        {
            name: "Username",
            selector: row => row.username,
            sortable: true
        },
        {
            name: "Password",
            selector: row => row.password,
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
