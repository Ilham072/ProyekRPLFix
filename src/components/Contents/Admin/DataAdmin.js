import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import TableAdmin from "../../../utils/TableAdmin";
import AdminData from "../../../config/Admin/AdminData.json";
import "../TablePertanian/DataPertanian.css";

const DataAdmin = () => {
  const [tableAdmin, setDataAdmin] = useState([]);

  useEffect(() => {
    setDataAdmin(AdminData);
  }, []);

  return (
    <div className="container-table">
      <DataTable columns={TableAdmin()} data={tableAdmin} />
    </div>
  );
};

export default DataAdmin;