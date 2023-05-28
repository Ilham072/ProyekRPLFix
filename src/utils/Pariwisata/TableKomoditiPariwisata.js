import React from "react";
import { Button } from "../../components";
import axios from "axios";

export function getTableKomoditiPariwisata() {
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
            name: "Nama Wisata",
            selector: row => row.nama,
            sortable: true
        },
        {
            name: "Jenis Wisata",
            selector: row => row.bidang,
            sortable: true
        },
        {
            name: "Kecamatan",
            selector: row => row.kecamatan,
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
