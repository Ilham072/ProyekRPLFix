
export function getTableBerandaPerindustrian() {
    return [
        {
            name: "No",
            cell: (row, index) => <div>{index + 1}</div>,
            sortable: true
        },
        {
            name: "Komoditi",
            selector: row => row.komoditi,
            sortable: true
        },
        {
            name: "Kecamatan",
            selector: row => row.kecamatan,
            sortable: true
        },
        {
            name: "Potensi Kandungan",
            selector: row => row.potensi_kandungan,
            sortable: true
        }
    ];
}
