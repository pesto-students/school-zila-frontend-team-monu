import React from "react";
import Footer from "../../Common/Footer/Footer";
import Message from "../../Common/Message/Message";
import Notification from "../../Common/Notification/Notification";
import SideBar from "../../Common/SideBar/SideBar";
import StudentIcon from "../../../assets/Student-icon.svg";
import TeacherIcon from "../../../assets/Teacher-icon.svg";
import EventIcon from "../../../assets/Event-icon.svg";

import "./Dashboard.css";
import DateCalendarViews from "../../Common/Calender/Calender";
import MyChart from "../../Common/LineChart";

export default function Dashboard() {
  const dummyMessage = [
    {
      senderName: "Vishal Kori",
      inClass: "Class 7A",
    },
    {
      senderName: "Saurabh Kumar",
      inClass: "Class 8B",
    },
    {
      senderName: "Monu Kumar",
      inClass: "Class 7C",
    },
    {
      senderName: "Akshay Kumar",
      inClass: "Class 9A",
    },
  ];

  const dummyNotifications = [
    {
      senderName: "Vishal Kori",
      info: "Lorum Ipsum dolar sit amet..",
    },
    {
      senderName: "Saurabh Kumar",
      info: "Lorum Ipsum dolar sit amet..",
    },
    {
      senderName: "Monu Kumar",
      info: "Lorum Ipsum dolar sit amet..",
    },
    {
      senderName: "Akshay Kumar",
      info: "Lorum Ipsum dolar sit amet..",
    },
  ];

  return (
    <>
      <div className="mainContainer">
        <SideBar />
        <div className="mainMiddleContainer">
          <div className="dash-main">
            <div className="dashContanier">
              <div className="topHeader">
                <p>Dashboard</p>
              </div>
              <div className="schoolStats">
                <div className="studentCount">
                  <div className="studentAvatar">
                    <img src={StudentIcon} alt="Student Icon" />
                  </div>
                  <p className="studentStatsText1">Student</p>
                  <p className="studentStatsText2">1932</p>
                </div>
                <div className="teacherCount">
                  <div className="teacherAvatar">
                    <img src={TeacherIcon} alt="Teacher Icon" />
                  </div>
                  <p className="studentStatsText1">Teacher</p>
                  <p className="studentStatsText2">754</p>
                </div>
                <div className="eventCount">
                  <div className="eventAvatar">
                    <img src={EventIcon} alt="Event Icon" />
                  </div>
                  <p className="studentStatsText1">Teacher</p>
                  <p className="studentStatsText2">754</p>
                </div>
              </div>
              <div className="schoolCalender">
                <DateCalendarViews />
              </div>
              <MyChart />
            </div>
            <div className="rightContainer"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
