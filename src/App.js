import React from "react";
import "./App.css";
// import AnalysisLecture from "./components/Layouts/CoursePage/AnalysisLecture";
// import Course from "./components/Layouts/CoursePage/Course";
// import AddNewStudent from "./components/Layouts/StudentPage/AddNewStudent";
// import Student from "./components/Layouts/StudentPage/Student";
// import AddNewTeacher from "./components/Layouts/TeacherPage/AddNewTeacher";
import Teacher from "./components/Layouts/TeacherPage/Teacher";

function App() {
  // return <div>{false ? <Student /> : <Teacher />}</div>;
  return (
    <div className="rootDiv1">
      <Teacher />
    </div>
  );
}

export default App;
