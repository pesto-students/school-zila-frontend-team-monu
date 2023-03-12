import React from "react";
import "./App.css";
import AddNewStudent from "./components/Layouts/StudentPage/AddNewStudent";
// import Student from "./components/Layouts/StudentPage/Student";
import AddNewTeacher from "./components/Layouts/TeacherPage/AddNewTeacher";
// import Teacher from "./components/Layouts/TeacherPage/Teacher";

function App() {
  // return <div>{false ? <Student /> : <Teacher />}</div>;
  return (
    <div>
      <AddNewStudent />
    </div>
  );
}

export default App;
