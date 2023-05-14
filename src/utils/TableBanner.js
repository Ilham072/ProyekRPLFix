import { Button } from "../components";
export function getTableBanner() {
    return [
        {
            name: "No",
            selector: row => row.nomor,
            sortable: true
        },
        {
            name: "Banner",
            selector: row => row.banner,
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
