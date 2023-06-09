import React from 'react';
import CardGrafik from '../../components/Card/Grafik/CardGrafik';
import dataGrafikPariwisata from "../../config/Pariwisata/dataGrafikPariwisata.json";

const GrafikKomoditiPariwisata = ({dataPariwisata}) => {
  const reversedData = dataPariwisata.map(item => ({
    nama: item.nama_wisata,
    value: item.total_wisatawan, // 
  }));
  reversedData.sort((a, b) => b.value - a.value);
  const data = reversedData.slice(0, 10);

  return (
    <div>
      <CardGrafik
        data={data}
        title="Jumlah Pengunjung"
        xLabel="Pengunjung"
        yLabel="Nama Wisata"
      />
    </div>
  );
}

export default GrafikKomoditiPariwisata;
