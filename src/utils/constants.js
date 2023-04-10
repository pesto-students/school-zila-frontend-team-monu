const TOASTER_STATUS ={
    SUCCESS: 'success',
    ERROR: 'error',
};

const STUDENTS_COLUMNS = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "id",
    numeric: true,
    disablePadding: false,
    label: "ID",
  },
  {
    id: "date",
    numeric: true,
    disablePadding: false,
    label: "Date",
  },
  {
    id: "pname",
    numeric: true,
    disablePadding: false,
    label: "Parent Name",
  },
  {
    id: "city",
    numeric: true,
    disablePadding: false,
    label: "City",
  },
  {
    id: "contact",
    numeric: true,
    disablePadding: false,
    label: "Contact",
  },
  {
    id: "grade",
    numeric: true,
    disablePadding: false,
    label: "Grade",
  },
  {
    id: "action",
    numeric: true,
    disablePadding: false,
    label: "Action",
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