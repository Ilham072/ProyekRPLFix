import React from 'react';
import CardGrafik from '../../components/Card/Grafik/CardGrafik';
import dataGrafikPertanian from "../../config/pertanian/dataGrafikPertanian.json";

const GrafikKomoditiPertanian = ({dataPertanian}) => {
  const reversedData = dataPertanian.map(item => ({
    kecamatan: item.kecamatan,
    value: item.total_produksi, // Menggunakan properti 'value' untuk nilai produksi
  }));
  reversedData.sort((a, b) => b.value - a.value);
  const data = reversedData.slice(0, 10);

  return (
    <div>
      <CardGrafik
        data={data}
        title="Jumlah Ton"
        xLabel="Nilai Produksi"
        yLabel="Kecamatan"
      />
    </div>
  );
}

export default GrafikKomoditiPertanian;
