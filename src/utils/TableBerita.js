import { Button } from "../components";
export function getTableBerita() {
    return [
        {
            name: "No",
            selector: row => row.nomor,
            sortable: true
        },
        {
            name: "Judul",
            selector: row => row.judul,
            sortable: true
        },
        {
            name: "Sektor",
            selector: row => row.sektor,
            sortable: true
        },
        {
            name: "Kecamatan",
            selector: row => row.kecamatan,
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
