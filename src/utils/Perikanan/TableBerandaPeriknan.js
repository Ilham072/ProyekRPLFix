export function getTableBerandaPerikanan() {
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
            name: "Volume(Ton)",
            selector: row => row.volume,
            sortable: true
        },
        {
            name: "Nilai Produksi",
            selector: row => row.nilai_produksi,
            sortable: true
        }
    ];
}
