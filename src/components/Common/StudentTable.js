import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function StudentTable({studentData, columns}) {
  return (
    <div style={{ height: "61vh", width: "100%" }}>
      <DataGrid
        rows={studentData}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
