import React from 'react';
import CardGrafik from '../../components/Card/Grafik/CardGrafik';
import dataGrafikPariwisata from "../../config/Pariwisata/dataGrafikPariwisata.json";

const GrafikKomoditiPariwisata = () => {
  const data = dataGrafikPariwisata.slice(0, 10);
  const reversedData = data.map(item => ({
    nama: item.nama,
    value: item.pengunjung, // 
  }));
  reversedData.sort((a, b) => b.value - a.value);

  return (
    <div>
      <CardGrafik
        data={reversedData}
        title="Jumlah Pengunjung"
        xLabel="Pengunjung"
        yLabel="Nama Wisata"
      />
    </div>
  );
}

export default GrafikKomoditiPariwisata;
