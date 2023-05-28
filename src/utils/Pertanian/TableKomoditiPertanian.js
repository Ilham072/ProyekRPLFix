import React, { useState } from "react";
import { Button } from "../../components";
import PopupDeleted from "../../components/PopUp/PopupDeleted";



const TableKomoditiPertanian = () => {
    
    const [showPopupDeleted, setShowPopupDeleted] = useState(false);

    const handleConfirm = () => {
        // Logika ketika tombol "Ya" ditekan
        console.log("Data telah ditambahkan.");
        setShowPopupDeleted(false);
    };

    const handleCancel = () => {
        // Logika ketika tombol "Tidak" ditekan
        console.log("Batal menambahkan data.");
        setShowPopupDeleted(false);
    };

    const handleButtonClick = () => {
        // Logika ketika tombol utama ditekan
        setShowPopupDeleted(true);
    };
    return [
        {
            name: "No",
            selector: row => row.nomor,
            sortable: true
        },
        {
            name: "Komoditi Pertanian",
            selector: row => row.komoditi,
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