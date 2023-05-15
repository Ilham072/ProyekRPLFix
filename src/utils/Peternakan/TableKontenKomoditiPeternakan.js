import { Button } from "../../components/Button/Button";
export function getTableKontenKomoditiPeternakan() {
    return [
        {
            name: "No",
            selector: row => row.no,
            sortable: true
        },
        {
            name: "Judul",
            selector: row => row.judul,
            sortable: true
        },
        {
            name: "Gambar",
            selector: row => row.gambar,
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
                    <Button className="btn-edit"><img src="assets/icon/button/button-edit.svg"/></Button>
                    <Button className="btn-delete"><img src="assets/icon/button/button-delete.svg"/></Button>
                </div>
            ),
            sortable: true
        }
    ];
}
