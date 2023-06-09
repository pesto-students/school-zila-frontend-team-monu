import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import schoolLogo from "../../../assets/School-logo.svg";
import homeIcon from "../../../assets/Home-icon.svg";
import studentIcon from "../../../assets/Student-icon.svg";
import teacherIcon from "../../../assets/Teacher-icon.svg";
import eventIcon from "../../../assets/Event-icon.svg";
import courseIcon from "../../../assets/Course-icon.svg";
import userIcon from "../../../assets/User-icon.svg";
import activityIcon from "../../../assets/Activity-icon.svg";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="container">
      <div className="schoolName">
        <img src={schoolLogo} alt="asd" />
        <p>WizzKid</p>
      </div>
      <div className="menuItems">
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "activeDashBoardButton"
              : "dashBoardButton"
          }
        >
          <img src={homeIcon} alt="asd" />
          <p>Dashboard</p>
        </NavLink>
        <NavLink
          to="/student"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "activeDashBoardButton"
              : "dashBoardButton"
          }
        >
          <img src={studentIcon} alt="icon" />
          <p>Students</p>
        </NavLink>
        <NavLink
          to="/teacher"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "activeDashBoardButton"
              : "dashBoardButton"
          }
        >
          <img src={teacherIcon} alt="icon" />
          <p>Teachers</p>
        </NavLink>
        <NavLink
          to="/classes"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "activeDashBoardButton"
              : "dashBoardButton"
          }
        >
          <img src={activityIcon} alt="icon" />
          <p>Class</p>
        </NavLink>
        <NavLink
          to="/event-calendar"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "activeDashBoardButton"
              : "dashBoardButton"
          }
        >
          <img src={eventIcon} alt="icon" />
          <p>Events</p>
        </NavLink>
        <NavLink
          to="/course"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "activeDashBoardButton"
              : "dashBoardButton"
          }
        >
          <img src={courseIcon} alt="icon" />
          <p>Course</p>
        </NavLink>
        <NavLink
          to="/user"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "activeDashBoardButton"
              : "dashBoardButton"
          }
        >
          <img src={userIcon} alt="icon" />
          <p>User</p>
        </NavLink>
        <NavLink
          to="/latest-activity"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "activeDashBoardButton"
              : "dashBoardButton"
          }
        >
          <img src={activityIcon} alt="icon" />
          <p>Latest Activity</p>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
