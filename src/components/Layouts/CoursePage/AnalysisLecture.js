import React, { useState } from "react";
import TopBar from "../../Common/TopBar/TopBar";
// import tempVideo from "../../../assets/mov_bbb.mp4";
import "./AnalysisLecture.css";
import LectureSideBar from "../../Common/LectureSideBar/LectureSideBar";

export default function AnalysisLecture({ props }) {
  const { setOpenLecture, lectureUrl, lectureDetail } = props;
  return (
    <>
      <div className="mainContainer">
        <div className="mainMiddleContainer">
          <div className="middleContainer">
            <TopBar title="Analysis Lecture" />
            <button className="backBtn" onClick={() => setOpenLecture(false)}>
              Back
            </button>
            <div className="analysisLectureDiv">
              <div className="analysisLecMainDiv">
                <video width="99%" height="55%" controls>
                  <source src={lectureUrl} type="video/mp4"></source>
                </video>
                <div className="lectureDetail">
                  <p className="lectureDetailHeader">Lecture Detail</p>
                  <p>{lectureDetail}</p>
                </div>
              </div>
              <LectureSideBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
