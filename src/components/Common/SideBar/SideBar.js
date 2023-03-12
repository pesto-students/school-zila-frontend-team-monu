import React, { useState } from "react";
import "./SideBar.css";
import schoolLogo from "../../../assets/School-logo.svg";
import homeIcon from "../../../assets/Home-icon.svg";
import studentIcon from "../../../assets/Student-icon.svg";
import teacherIcon from "../../../assets/Teacher-icon.svg";
import eventIcon from "../../../assets/Event-icon.svg";
import courseIcon from "../../../assets/Course-icon.svg";
import userIcon from "../../../assets/User-icon.svg";
import activityIcon from "../../../assets/Activity-icon.svg";

export default function SideBar() {
  const [activeDashBoard, setActiveDashBoard] = useState(false);
  const [activeStudent, setActiveStudent] = useState(false);
  const [activeTeacher, setActiveTeacher] = useState(false);
  const [activeEvent, setActiveEvent] = useState(false);
  const [activeCourse, setActiveCourse] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [activeLatestActivity, setActiveLatestActivity] = useState(false);

  function toggleMenu() {
    const listOfBoard = [
      {
        get: activeDashBoard,
        set: setActiveDashBoard,
      },
      {
        get: activeStudent,
        set: setActiveStudent,
      },
      {
        get: activeTeacher,
        set: setActiveTeacher,
      },
      {
        get: activeEvent,
        set: setActiveEvent,
      },
      {
        get: activeCourse,
        set: setActiveCourse,
      },
      {
        get: activeUser,
        set: setActiveUser,
      },
      {
        get: activeLatestActivity,
        set: setActiveLatestActivity,
      },
    ];

    listOfBoard.map((elm) => {
      if (elm.get) {
        elm.set(!elm.get);
      }
    });
  }

  return (
    <div className="container">
      <div className="schoolName">
        <img src={schoolLogo} alt="asd" />
        <p>WizzKid</p>
      </div>
      <div className="menuItems">
        <div
          className={
            activeDashBoard ? "activeDashBoardButton" : "dashBoardButton"
          }
          onClick={() => {
            toggleMenu();
            setActiveDashBoard(!activeDashBoard);
          }}
        >
          <img src={homeIcon} alt="asd" />
          <p>Dashboard</p>
        </div>
        <div
          className={
            activeStudent ? "activeDashBoardButton" : "dashBoardButton"
          }
          onClick={() => {
            toggleMenu();
            setActiveStudent(!activeStudent);
          }}
        >
          <img src={studentIcon} alt="asd" />
          <p>Students</p>
        </div>
        <div
          className={
            activeTeacher ? "activeDashBoardButton" : "dashBoardButton"
          }
          onClick={() => {
            toggleMenu();
            setActiveTeacher(!activeTeacher);
          }}
        >
          <img src={teacherIcon} alt="asd" />
          <p>Teachers</p>
        </div>
        <div
          className={activeEvent ? "activeDashBoardButton" : "dashBoardButton"}
          onClick={() => {
            toggleMenu();
            setActiveEvent(!activeEvent);
          }}
        >
          <img src={eventIcon} alt="asd" />
          <p>Event</p>
        </div>
        <div
          className={activeCourse ? "activeDashBoardButton" : "dashBoardButton"}
          onClick={() => {
            toggleMenu();
            setActiveCourse(!activeCourse);
          }}
        >
          <img src={courseIcon} alt="asd" />
          <p>Course</p>
        </div>
        <div
          className={activeUser ? "activeDashBoardButton" : "dashBoardButton"}
          onClick={() => {
            toggleMenu();
            setActiveUser(!activeUser);
          }}
        >
          <img src={userIcon} alt="asd" />
          <p>User</p>
        </div>
        <div
          className={
            activeLatestActivity ? "activeDashBoardButton" : "dashBoardButton"
          }
          onClick={() => {
            toggleMenu();
            setActiveLatestActivity(!activeLatestActivity);
          }}
        >
          <img src={activityIcon} alt="asd" />
          <p>Latest Activity</p>
        </div>
      </div>
    </div>
  );
}
