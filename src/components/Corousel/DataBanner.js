import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getTableBanner } from "../../utils/TableBanner";
import dataBanner from "../../config/Konten/dataBanner.json";


const DataBanner = () => {
  const [tableBanner, setDataBanner] = useState([]);

  useEffect(() => {
    setDataBanner(
      dataBanner.map((item) => {
        return {
          nomor: item.nomor,
          banner: <img src={item.banner} alt="Banner" width="300" height="auto" />,
        };
      })
    );
  }, []);

  return (
    <div className="container-table-banner">
      <DataTable columns={getTableBanner()} 
      data={tableBanner} />
    </div>
  );
};

export default DataBanner;