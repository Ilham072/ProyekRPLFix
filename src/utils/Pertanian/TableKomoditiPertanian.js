import React, { useState } from "react";
import { Button } from "../../components";
import PopupDeleted from "../../components/PopUp/PopupDeleted";
import axios from "axios";


const TableKomoditiPertanian = () => {

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
    
    const [showPopupDeleted, setShowPopupDeleted] = useState(false);

    const handleConfirm = () => {
        // Logika ketika tombol "Ya" ditekan
        deleteHandler()
        console.log("Data telah dihapus.");
        setShowPopupDeleted(false);
    };

    const handleCancel = () => {
        // Logika ketika tombol "Tidak" ditekan
        console.log("Batal menghapus data.");
        setShowPopupDeleted(false);
    };

    const handleButtonClick = () => {
        // Logika ketika tombol utama ditekan
        setShowPopupDeleted(true);
    };

    return [
        {
            name: "No",
            cell: (row, index) => <div>{index + 1}</div>,
            sortable: true
        },
        {
            name: "Komoditi Pertanian",
            selector: row => row.nama,
            sortable: true
        },
        {
            name: "Bidang",
            selector: row => row.bidang,
            sortable: true
        },
        {
            name: "",
            selector: row => (
                <div>
                    <Button className="btn-delete" onClick={handleButtonClick}><img src="assets/icon/button/button-delete.svg"/></Button>
                    {showPopupDeleted && (
                        <PopupDeleted
                            message="Apakah Anda yakin menghapus data?"
                            onConfirm={handleConfirm}
                            onCancel={handleCancel}
                        />
                    )}
                </div>
            ),
            sortable: true
        }
    ];
}
export default TableKomoditiPertanian;