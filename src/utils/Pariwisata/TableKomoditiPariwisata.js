import { Button } from "../../components";
export function getTableKomoditiPariwisata() {
    return [
        {
            name: "No",
            selector: row => row.nomor,
            sortable: true
        },
        {
            name: "Nama Wisata",
            selector: row => row.namaWisata,
            sortable: true
        },
        {
            name: "Jenis Wisata",
            selector: row => row.jenisWisata,
            sortable: true
        },
        {
            name: "",
            selector: row => (
                <div>
                    <Button className="btn-delete"><img src="assets/icon/button/button-delete.svg"/></Button>
                </div>
            ),
            sortable: true
        }
    ];
}
