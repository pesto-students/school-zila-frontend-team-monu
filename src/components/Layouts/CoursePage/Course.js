import React from "react";
import SideBar from "../../Common/SideBar/SideBar";
import TopBar from "../../Common/TopBar/TopBar";
import Footer from "../../Common/Footer/Footer";
import SubjectCard from "../../Common/SubjectCard/SubjectCard";
import "./Course.css";

export default function Course() {
  return (
    <>
      <div className="mainContainer">
        <SideBar />
        <div className="mainMiddleContainer">
          <div className="middleContainer">
            <TopBar title="Courses" />
            <div className="subjects">
              <div className="subjectHeader">
                <p>Topics</p>
                <div className="subjectTab">
                  <p className="activeSubjectTab">Recordings</p>
                  <p>Assignments</p>
                  <p>Notes</p>
                </div>
              </div>
              <div className="subjectDetails">
                <SubjectCard />
                <SubjectCard />
                <SubjectCard />
                <SubjectCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
