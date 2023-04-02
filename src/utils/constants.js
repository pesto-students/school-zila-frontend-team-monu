const TOASTER_STATUS ={
    SUCCESS: 'success',
    ERROR: 'error',
};

const STUDENTS_COLUMNS = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

const ASSIGNMENT_COLUMNS = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "subject", headerName: "SUBJECT", width: 120 },
  { field: "description", headerName: "DESCRIPTION", width: 350 },
  { field: "teacherName", headerName: "TEACHER NAME", width: 150 },
  { field: "date", headerName: "DATE", width: 140 },
  { field: "marks", headerName: "MARKS", width: 100 },
]

export {TOASTER_STATUS, STUDENTS_COLUMNS, ASSIGNMENT_COLUMNS};