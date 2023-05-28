import React from 'react';
import CardGrafik from '../../components/Card/Grafik/CardGrafik';
import dataGrafikPerikanan from "../../config/Perikanan/dataGrafikPerikanan.json";

const GrafikKomoditiPerikanan = () => {
  const data = dataGrafikPerikanan.slice(0, 10);
  const reversedData = data.map(item => ({
    kecamatan: item.kecamatan,
    value: item.volume, 
  }));
  reversedData.sort((a, b) => b.value - a.value);

  return (
    <div>
      <CardGrafik
        data={reversedData}
        title="Jumlah Ton"
        xLabel="Volume"
        yLabel="Kecamatan"
      />
    </div>
  );
}

export default GrafikKomoditiPerikanan;
