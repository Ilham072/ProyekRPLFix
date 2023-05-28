import React from "react";
import { Button } from "../../components/Button/Button";
import axios from "axios";

export function getTableKontenKomoditiPerindustrian(navigateToEdit) {
    const deleteHandler = async (id) => {
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.delete(`http://localhost:8000/api/Konten Komoditi/${id}`)
            .then(() => {
                console.log('Sukses Menghapus Data Konten Komoditi');
                const storedData = localStorage.getItem('dataKontenKomoditi');
                if (storedData) {
                    localStorage.removeItem('dataKontenKomoditi');
                }
                window.location.reload(false);
            })
    }

    const handleEdit = (row) => {
        const queryParam = encodeURIComponent(row.id);
        navigateToEdit(`/editKontenKomoditi?id=${queryParam}`);
    };

    return [
        {
            name: "No",
            cell: (row, index) => <div>{index + 1}</div>,
            sortable: true
        },
        {
            name: "Judul",
            selector: row => row.judul,
            sortable: true
        },
        {
            name: "Gambar",
            selector: row => <img src={row.gambar} alt="Gambar" style={{ width: "100px", height: "100px" }} />,
            sortable: true
        },
        {
            name: "Isi",
            selector: row => row.isi,
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
