import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTableBerita } from "../../../utils/TableBerita";
import dataBerita from "../../../config/Konten/dataBerita.json";
import axios from "axios";


const DataBerita = () => {
  const [tableBerita, setDataBerita] = useState([]);

  useEffect(() => {
    async function fetchDataKontenBerita() {
      let data;
      const storedData = localStorage.getItem("dataKontenBerita");
      if (storedData) {
        data = JSON.parse(storedData);
      } else {
        const response = await axios.get('http://localhost:8000/api/Konten Berita');
        data = response.data;
        localStorage.setItem('dataKontenBerita', JSON.stringify(data));
      }
        setDataBerita(data);
    }
    fetchDataKontenBerita();
  }, []);

  return (
    <div className="container-table-berita">
      <DataTable columns={getTableBerita()} 
      data={tableBerita} />
    </div>
  );
};

export default DataBerita;