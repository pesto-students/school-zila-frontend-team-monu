import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Layouts/LandingPage/LoginPage";
import LatestActivity from "./components/Layouts/LatestActivityPage/LatestActivity";
import UserDetails from "./components/Layouts/UserDetailsPage/UserDetails";
import LandingPage from "./components/Layouts/LandingPage/LandingPage";
import AnalysisLecture from "./components/Layouts/CoursePage/AnalysisLecture";
import Course from "./components/Layouts/CoursePage/Course";
import AddNewStudent from "./components/Layouts/StudentPage/AddNewStudent";
import Student from "./components/Layouts/StudentPage/Student";
import AddNewTeacher from "./components/Layouts/TeacherPage/AddNewTeacher";
import Teacher from "./components/Layouts/TeacherPage/Teacher";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/student" element={<Student />} />
        <Route path="/teacher" element={<Teacher />} />
        {/* <Route path="/event" element={<Event />} /> */}
        <Route path="/course" element={<Course />} />
        <Route path="/user" element={<UserDetails />} />
        <Route path="/latest-activity" element={<LatestActivity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
