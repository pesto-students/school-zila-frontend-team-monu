import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Layouts/LandingPage/LoginPage";
import LatestActivity from "./components/Layouts/LatestActivityPage/LatestActivity";
import UserDetails from "./components/Layouts/UserDetailsPage/UserDetails";
import LandingPage from "./components/Layouts/LandingPage/LandingPage";
import Course from "./components/Layouts/CoursePage/Course";
import Student from "./components/Layouts/StudentPage/Student";
import Teacher from "./components/Layouts/TeacherPage/Teacher";
import { EventCalendar } from "./components/Common/Calendar/Calendar";
import SideBar from "./components/Common/SideBar/SideBar";
import "./App.css";
import SignUpPage from "./components/Layouts/LandingPage/SignUpPage";
// import { Dashboard } from "@mui/icons-material";

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div>
      <BrowserRouter>
        {showSideBar && <SideBar />}
        <Routes>
          <Route path="/" element={<LandingPage setShowSideBar={setShowSideBar} />} />
          <Route path="/login" element={<LoginPage setShowSideBar={setShowSideBar} />} />          
          <Route path="/signup" element={<SignUpPage />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/student" element={<Student setShowSideBar={setShowSideBar} />} />
          <Route path="/teacher" element={<Teacher setShowSideBar={setShowSideBar} />} />
          <Route path="/event-calendar" element={<EventCalendar setShowSideBar={setShowSideBar} />} />
          <Route path="/course" element={<Course setShowSideBar={setShowSideBar} />} />
          <Route path="/user" element={<UserDetails setShowSideBar={setShowSideBar} />} />
          <Route path="/latest-activity" element={<LatestActivity setShowSideBar={setShowSideBar} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
