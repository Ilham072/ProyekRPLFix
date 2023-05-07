export function getTableBerandaPerikanan() {
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
            name: "Volume(Ton)",
            selector: row => row.volume,
            sortable: true
        },
        {
            name: "Nilai Produksi",
            selector: row => row.nilaiProduksi,
            sortable: true
        }
    ];
}
