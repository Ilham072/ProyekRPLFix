import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTableBerita } from "../../../utils/TableBerita";
import dataBerita from "../../../config/Konten/dataBerita.json";


const DataBerita = () => {
  const [tableBerita, setDataBerita] = useState([]);

  useEffect(() => {
    setDataBerita(
      dataBerita.map((item) => {
        return {
          nomor: item.nomor,
          judul: item.judul,
          sektor: item.sektor,
          kecamatan: item.kecamatan,
          gambar: <img src={item.gambar} alt="Berita" width="100" height="auto" />,
          isi: item.isi,
        };
      })
    );
  }, []);

  return (
    <div className="container-table-berita">
      <DataTable columns={getTableBerita()} 
      data={tableBerita} />
    </div>
  );
};

export default DataBerita;