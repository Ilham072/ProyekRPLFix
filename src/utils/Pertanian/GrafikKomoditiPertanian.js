import React from 'react';
import CardGrafik from '../../components/Card/Grafik/CardGrafik';
import dataGrafikPertanian from "../../config/pertanian/dataGrafikPertanian.json";

const GrafikKomoditiPertanian = () => {
  const data = dataGrafikPertanian.slice(0, 10);
  const reversedData = data.map(item => ({
    kecamatan: item.kecamatan,
    value: item.produksi, // Menggunakan properti 'value' untuk nilai produksi
  }));
  reversedData.sort((a, b) => b.value - a.value);

  return (
    <div>
      <CardGrafik
        data={reversedData}
        title="Jumlah Ton"
        xLabel="Nilai Produksi"
        yLabel="Kecamatan"
      />
    </div>
  );
}

export default GrafikKomoditiPertanian;
