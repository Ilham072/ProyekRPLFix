import React from 'react';
import CardGrafik from '../../components/Card/Grafik/CardGrafik';
import dataGrafikPerindustrian from "../../config/Perindustrian/dataGrafikPerindustrian.json";

const GrafikKomoditiPerindustrian = ({dataPerindustrian}) => {
  const reversedData = dataPerindustrian.map(item => ({
    kecamatan: item.kecamatan,
    value: item.total_potensi_kandungan, 
  }));
  reversedData.sort((a, b) => b.value - a.value);
  const data = reversedData.slice(0, 10);

  return (
    <div>
      <CardGrafik
        data={data}
        title="Jumlah Ton"
        xLabel="Potensi Kandungan"
        yLabel="Kecamatan"
      />
    </div>
  );
}

export default GrafikKomoditiPerindustrian;
