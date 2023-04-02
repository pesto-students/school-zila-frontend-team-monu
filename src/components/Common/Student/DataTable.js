import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable({studentData, columns}) {
  return (
    <div style={{ height: "69.3vh", width: "100%" }}>
      <DataGrid
        rows={studentData}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
  );
}
