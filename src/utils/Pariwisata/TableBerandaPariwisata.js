
export function getTableBerandaPariwisata() {
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
