import React from 'react';
import CardGrafik from '../../components/Card/Grafik/CardGrafik';
import dataGrafikPeternakan from "../../config/Peternakan/dataGrafikPeternakan.json";

const GrafikKomoditiPeternakan = () => {
  const data = dataGrafikPeternakan.slice(0, 10);
  const reversedData = data.map(item => ({
    kecamatan: item.kecamatan,
    value: item.populasi, // 
  }));
  reversedData.sort((a, b) => b.value - a.value);

  return (
    <div>
      <CardGrafik
        data={reversedData}
        title="Jumlah Ekor"
        xLabel="Populasi"
        yLabel="Kecamatan"
      />
    </div>
  );
}

export default GrafikKomoditiPeternakan;
