import React from 'react';
import CardGrafik from '../../components/Card/Grafik/CardGrafik';
import dataGrafikPerikanan from "../../config/Perikanan/dataGrafikPerikanan.json";

const GrafikKomoditiPerikanan = ({dataPerikanan}) => {
  const reversedData = dataPerikanan.map(item => ({
    kecamatan: item.kecamatan,
    value: item.total_volume, 
  }));
  reversedData.sort((a, b) => b.value - a.value);
  const data = reversedData.slice(0, 10);

  return (
    <div>
      <CardGrafik
        data={data}
        title="Jumlah Ton"
        xLabel="Volume"
        yLabel="Kecamatan"
      />
    </div>
  );
}

export default GrafikKomoditiPerikanan;
