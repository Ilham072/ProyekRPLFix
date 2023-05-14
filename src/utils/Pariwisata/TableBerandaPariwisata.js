
export function getTableBerandaPariwisata() {
    return [
        {
            name: "No",
            cell: (row, index) => <div>{index + 1}</div>,
            sortable: true
        },
        {
            name: "Nama Wisata",
            selector: row => row.nama_wisata,
            sortable: true
        },
        {
            name: "Jenis Wisata",
            selector: row => row.jenis_wisata,
            sortable: true
        },
        {
            name: "Desa",
            selector: row => row.desa,
            sortable: true
        },
        {
            name: "Wisatawan",
            selector: row => row.wisatawan,
            sortable: true
        }
        
    ];
}
