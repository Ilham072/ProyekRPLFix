export function getTableBerandaPeternakan() {
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
            name: "Total",
            selector: row => row.total,
            sortable: true
        },
        {
            name: "Kelahiran",
            selector: row => row.kelahiran,
            sortable: true
        },
        {
            name: "Kematian",
            selector: row => row.kematian,
            sortable: true
        },
        {
            name: "Pemotongan",
            selector: row => row.pemotongan,
            sortable: true
        },
        {
            name: "Ternak Masuk",
            selector: row => row.ternak_masuk,
            sortable: true
        },
        {
            name: "Ternak Keluar",
            selector: row => row.ternak_keluar,
            sortable: true
        },
        {
            name: "Populasi",
            selector: row => row.populasi,
            sortable: true
        }
    ];
}
