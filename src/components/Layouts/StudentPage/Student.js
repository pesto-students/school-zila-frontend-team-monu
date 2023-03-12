import React from "react";
import AddIcon from "@mui/icons-material/Add";
import TopBar from "../../Common/TopBar/TopBar";
import ColorButtons from "../../Button";
import SearchInput from "../../SearchInput";
import SideBar from "../../Common/SideBar/SideBar";
import DataTable from "../../StudentTable";
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
            <AddNewMemComp buttonTitle="New Student" />
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
