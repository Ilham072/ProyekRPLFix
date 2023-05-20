import { Button } from "../../components/Button/Button";

export function getTableKontenKomoditiPariwisata() {
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
                    <Button className="btn-edit"><img src="assets/icon/button/button-edit.svg" alt="Edit" /></Button>
                    <Button className="btn-delete"><img src="assets/icon/button/button-delete.svg" alt="Delete" /></Button>
                </div>
            ),
            sortable: true
        }
    ];
}
