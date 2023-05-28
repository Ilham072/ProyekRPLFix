import React from 'react';
import CardGrafik from '../../components/Card/Grafik/CardGrafik';
import dataGrafikPerindustrian from "../../config/Perindustrian/dataGrafikPerindustrian.json";

const GrafikKomoditiPerindustrian = () => {
  const data = dataGrafikPerindustrian.slice(0, 10);
  const reversedData = data.map(item => ({
    kecamatan: item.kecamatan,
    value: item.kandungan, 
  }));
  reversedData.sort((a, b) => b.value - a.value);

  return (
    <div>
      <CardGrafik
        data={reversedData}
        title="Jumlah Ton"
        xLabel="Potensi Kandungan"
        yLabel="Kecamatan"
      />
    </div>
  );
}

export default GrafikKomoditiPerindustrian;
