import React from "react";
import { Button } from "../../components";
import axios from "axios";

export function getTablePertanian() {
    const deleteHandler = async (id) => {
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.delete(`http://localhost:8000/api/Pertanian/${id}`)
            .then(() => {
                console.log('Sukses Menghapus Data Pertanian');
                const storedData = localStorage.getItem('dataPertanian');
                const storedDataBeranda = localStorage.getItem('tablePertanian');
                if (storedData) {
                    localStorage.removeItem('dataPertanian');
                }
                if(storedDataBeranda) {
                    localStorage.removeItem('tablePertanian');
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
            name: "Bidang",
            selector: row => row.bidang,
            sortable: true
        },
        {
            name: "Luas Panen (Ha)",
            selector: row => row.luas_lahan,
            sortable: true
        },
        {
            name: "Produksi (Ton)",
            selector: row => row.produksi,
            sortable: true
        },
        {
            name: "Produktivitas (Kw/Ha)",
            selector: row => row.produktivitas,
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
