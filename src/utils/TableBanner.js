import React from "react";
import { Button } from "../components";
import axios from "axios";

export function getTableBanner() {
    const deleteHandler = async (id) => {
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.delete(`http://localhost:8000/api/Konten Banner/${id}`)
            .then(() => {
                console.log('Sukses Menghapus Data Konten Banner');
                const storedData = localStorage.getItem('dataKontenBanner');
                if (storedData) {
                    localStorage.removeItem('dataKontenBanner');
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
            name: "Gambar",
            cell: (row) => (
                <img src={row.banner} alt="Gambar Banner" style={{ width: "250px", height: "auto" }} />
              ),
            sortable: false
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
