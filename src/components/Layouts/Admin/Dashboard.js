import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Calendar from "react-calendar";
import Message from "../../Common/Message/Message";
import Notification from "../../Common/Notification/Notification";
import BarChart from "../../Common/Chart/Barchart";
import LineChart from "../../Common/Chart/Linechart";
import TopBar from "../../Common/TopBar/TopBar";
import SideBar from "../../Common/SideBar/SideBar";
import StudentImg from "../../../assets/Dashboard-images/Student.svg";
import TeacherImg from "../../../assets/Dashboard-images/Teacher.svg";
import EventImg from "../../../assets/Dashboard-images/Event.svg";
import PlusIcon from "../../../assets/Dashboard-images/Plus.svg";
import "react-calendar/dist/Calendar.css";
import "./Dashboard.css";

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

  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 11,
      class: "7th",
      amount: "Rs.50,000",
    },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      age: 11,
      class: "7th",
      amount: "Rs.50,000",
    },
    {
      id: 3,
      lastName: "Lannister",
      firstName: "Jaime",
      age: 11,
      class: "7th",
      amount: "Rs.50,000",
    },
    {
      id: 4,
      lastName: "Stark",
      firstName: "Arya",
      age: 11,
      class: "7th",
      amount: "Rs.50,000",
    },
    {
      id: 5,
      lastName: "Targaryen",
      firstName: "Daenerys",
      age: 11,
      class: "7th",
      amount: "Rs.50,000",
    },
    {
      id: 6,
      lastName: "Melisandre",
      firstName: 11,
      age: 11,
      class: "7th",
      amount: "Rs.50,000",
    },
    {
      id: 7,
      lastName: "Clifford",
      firstName: "Ferrara",
      age: 11,
      class: "7th",
      amount: "Rs.50,000",
    },
    {
      id: 8,
      lastName: "Frances",
      firstName: "Rossini",
      age: 11,
      class: "7th",
      amount: "Rs.50,000",
    },
    {
      id: 9,
      lastName: "Roxie",
      firstName: "Harvey",
      age: 11,
      class: "7th",
      amount: "Rs.50,000",
    },
  ];

  const columns = [
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "id", headerName: "ID", width: 170 },
    { field: "class", headerName: "Class", width: 100 },
    { field: "amount", headerName: "Amount", width: 130 },
  ];
  return (
    <div>
      <SideBar />
      <div style={{ marginLeft: "18vw" }}>
        <TopBar title="Dashboard" />
      </div>
      <div className="dash-main">
        <div className="dash-main-layout">
          <div className="dash-main-top">
            <div className="dash-sub-top">
              <img src={StudentImg} alt="Student Image Icon" />
              <span style={{ marginLeft: "10px" }}>
                <div>students</div>
                <span>1932</span>
              </span>
            </div>
            <div className="dash-sub-top">
              <img src={TeacherImg} alt="Teachers Image Icon" />
              <span style={{ marginLeft: "10px" }}>
                <div>Teachers</div>
                <span>754</span>
              </span>
            </div>
            <div className="dash-sub-top">
              <img src={EventImg} alt="Event Image Icon" />
              <span style={{ marginLeft: "10px" }}>
                <div>Events</div>
                <span>40</span>
              </span>
            </div>
          </div>
          <br />
          <div className="dash-main-mid">
            <LineChart
              css={{
                width: "125vh",
                backgroundColor: "white",
                borderRadius: "12px",
              }}
            />
            <br />
            <div id="calendar-mid">
              <Calendar sx={{ borderRadius: "10px" }} />
              {/* <Calendar onChange={onChange} value={value} /> */}
              <BarChart
                css={{
                  width: "66vh",
                  backgroundColor: "white",
                  borderRadius: "12px",
                  marginLeft: "1vw",
                }}
              />
            </div>
          </div>
          <br />
          <div
            style={{
              height: "61vh",
              width: "125vh",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            <div
              style={{ fontSize: "18px", padding: "10px", color: "#303972" }}
            >
              Unpaid Students Intution
            </div>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              sx={{ color: "#303972", paddingLeft: "1vw", fontSize: "10px" }}
            />
          </div>
        </div>
        <div className="dash-main-right-column">
          <div className="dash-main-right-column-messages">
            <div className="messages-main">
              <div>Message</div>
              <div>{"You have 32 messages"}</div>
            </div>
            <img src={PlusIcon} alt="Plus Icon" />
          </div>
          <div>
            {dummyMessage.map((i) => (
              <Message
                senderName={i.senderName}
                inClass={i.inClass}
                key={`${i.senderName}+${i.inClass}`}
              />
            ))}
          </div>
          <button>View More</button>
          <div className="dash-main-right-column-notifications">
            <div className="notifications-main">
              <div>Notifications</div>
              <div>{"You have 32 notifications"}</div>
            </div>
          </div>
          <div>
            {dummyNotifications.map((i) => (
              <Notification
                senderName={i.senderName}
                info={i.info}
                key={`${i.senderName}+${i.info}`}
              />
            ))}
          </div>
          <button>View More</button>
        </div>
      </div>
    </div>
  );
}
