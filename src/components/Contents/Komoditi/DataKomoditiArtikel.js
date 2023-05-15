import React, {useEffect, useState } from "react";
import DropdownSektor from "../../Dropdown/DropdownSektor/DropdownSektor";
import DataTable from "react-data-table-component";
import { getTableKontenKomoditiPertanian } from "../../../utils/Pertanian/TableKontenKomoditiPertanian";
import { getTableKontenKomoditiPerikanan } from "../../../utils/Perikanan/TableKontenKomoditiPerikanan";
import { getTableKontenKomoditiPerindustrian } from "../../../utils/Perindustrian/TableKontenKomoditiPerindustrian";
import { getTableKontenKomoditiPeternakan } from "../../../utils/Peternakan/TableKontenKomoditiPeternakan";
import { getTableKontenKomoditiPariwisata } from "../../../utils/Pariwisata/TableKontenKomoditiPariwisata";
import dataKontenKomoditiPertanian from "../../../config/pertanian/dataKontenKomoditiPertanian.json";
import dataKontenKomoditiPariwisata from "../../../config/Pariwisata/dataKontenKomoditiPariwisata.json";
import dataKontenKomoditiPeternakan from "../../../config/Peternakan/dataKontenKomoditiPeternakan.json";
import dataKontenKomoditiPerindustrian from "../../../config/Perindustrian/dataKontenKomoditiPerindustrian.json";
import dataKontenKomoditiParikanan from "../../../config/Perikanan/dataKontenKomoditiPerikanan.json";

const DataKomoditiArtikel = () => {
    const [sektor, setSektor] = useState("pertanian");

    const handleSektorChange = (event) => {
        setSektor(event.target.value);
    }

    const renderTable = () => {
        switch (sektor) {
        case "pertanian":
          return (
            <div className="konten-komoditi">
              <DataTable columns={getTableKontenKomoditiPertanian()} data={dataKontenKomoditiPertanian} />
            </div>
          );
        case "peternakan":
          return (
            <div className="konten-komoditi">
              <DataTable columns={getTableKontenKomoditiPeternakan()} data={dataKontenKomoditiPeternakan} />
            </div>
          );
        case "perikanan":
          return (
            <div className="konten-komoditi">
              <DataTable columns={getTableKontenKomoditiPerikanan()} data={dataKontenKomoditiParikanan} />
            </div>
          );
        case "perindustrian":
          return (
            <div className="konten-komoditi">
              <DataTable columns={getTableKontenKomoditiPerindustrian()} data={dataKontenKomoditiPerindustrian} />
            </div>
          );
        case "pariwisata":
          return (
            <div className="konten-komoditi">
              <DataTable columns={getTableKontenKomoditiPariwisata()} data={dataKontenKomoditiPariwisata} />
            </div>
          );

          default:
            return null;
        }
      };

  return (
    <div className='content'>
                <div><h3>Data</h3></div>
                <DropdownSektor value={sektor} onChange={handleSektorChange} />
                <div><h3>Sektor {sektor.charAt(0).toUpperCase() + sektor.slice(1)}</h3></div>
                {renderTable()}
            </div>
  );
};

export default DataKomoditiArtikel;
