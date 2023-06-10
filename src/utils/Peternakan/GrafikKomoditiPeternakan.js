import React from 'react';
import CardGrafik from '../../components/Card/Grafik/CardGrafik';
import dataGrafikPeternakan from "../../config/Peternakan/dataGrafikPeternakan.json";

const GrafikKomoditiPeternakan = ({ dataPeternakan }) => {
  const reversedData = dataPeternakan.map(item => ({
    kecamatan: item.kecamatan,
    value: item.total_populasi, // 
  }));
  reversedData.sort((a, b) => b.value - a.value);
  const data = reversedData.slice(0, 10);

  return (
    <div>
      <CardGrafik
        data={data}
        title="Jumlah Ekor"
        xLabel="Populasi"
        yLabel="Kecamatan"
      />
    </div>
  );
}

export default GrafikKomoditiPeternakan;
