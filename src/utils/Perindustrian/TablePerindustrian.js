export function getTablePerindustrian() {
    return [
        {
            name: "No",
            selector: row => row.nomor,
            sortable: true
        },
        {
            name: "Komoditi",
            selector: row => row.komoditi,
            sortable: true
        },
        {
            name: "Potensi Kandungan",
            selector: row => row.potensiKandungan,
            sortable: true
        }
    ];
}
