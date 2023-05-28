import React, {useState} from 'react'
import { Button } from "../components";
import PopupEdit from '../components/PopUp/PopupEdit';
import PopupDeleted from '../components/PopUp/PopupDeleted';

const TableAdmin = () => {
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

    const [showPopupEdit, setShowPopupEdit] = useState(false);

    const handleConfirmEdit = () => {
        // Logika ketika tombol "Ya" ditekan
        console.log("Data telah ditambahkan.");
        setShowPopupEdit(false);
    };

    const handleCancelEdit = () => {
        // Logika ketika tombol "Tidak" ditekan
        console.log("Batal menambahkan data.");
        setShowPopupEdit(false);
    };

    const handleButtonClickEdit = () => {
        // Logika ketika tombol utama ditekan
        setShowPopupEdit(true);
    };

    return [
        {
            name: "No",
            selector: row => row.nomor,
            sortable: true
        },
        {
            name: "Nama Lengkap",
            selector: row => row.namaLengkap,
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
                    <Button className="btn-edit" onClick={handleButtonClickEdit}><img src="assets/icon/button/button-edit.svg"/></Button>
                    {showPopupEdit && (
                        <PopupEdit
                            message="Apakah Anda yakin akan mengedit data?"
                            onConfirm={handleConfirmEdit}
                            onCancel={handleCancelEdit}
                        />
                    )}
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
export default TableAdmin;
