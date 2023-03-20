import React from "react";
import TopBar from "../../Common/TopBar/TopBar";
import SideBar from "../../Common/SideBar/SideBar";
import DataTable from "../../Common/StudentTable";
import Footer from "../../Common/Footer/Footer";
import "./Student.css";
import AddNewMemComp from "../../Common/TopBar/AddNewMemComp";

export default function Student() {
  return (
    <>
      <div className="mainContainer">
        <SideBar />
        <div className="mainMiddleContainer">
          <div className="middleContainer">
            <TopBar title="Student" />
            <AddNewMemComp buttonTitle="New Student" route="/add-student" />
            <div className="studentDetail">
              <DataTable />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
