import React from "react";
import SideBar from "../../Common/SideBar/SideBar";
import TopBar from "../../Common/TopBar/TopBar";
import Footer from "../../Common/Footer/Footer";
import tempVideo from "../../../assets/mov_bbb.mp4";
import "./AnalysisLecture.css";
import LectureSideBar from "../../Common/LectureSideBar/LectureSideBar";

export default function AnalysisLecture() {
  return (
    <>
      <div className="mainContainer">
        <SideBar />
        <div className="mainMiddleContainer">
          <div className="middleContainer">
            <TopBar title="Analysis Lecture" />
            <div className="analysisLectureDiv">
              <div className="analysisLecMainDiv">
                <video src={tempVideo}></video>
                <div className="lectureDetail">
                  <p className="lectureDetailHeader">Lecture Detail</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                    doloremque architecto dolore, rem labore minus commodi
                    libero earum id, quas provident quidem. Quisquam, veritatis
                    fuga magni soluta esse ad ducimus eligendi illo ratione
                    aliquam, cum animi, corporis dignissimos numquam porro
                    consequatur ipsum laudantium suscipit expedita doloremque!
                    Corporis fuga inventore error.
                    <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iste suscipit aliquam sed atque tempore, vero quisquam quis
                    dicta aut, nobis magni qui, quas cupiditate in reprehenderit
                    possimus? Consequatur culpa fuga reiciendis delectus saepe
                    quod distinctio repellat odit aut sed voluptates commodi
                    itaque, aspernatur magnam debitis nemo alias suscipit quidem
                    deserunt!
                  </p>
                </div>
              </div>
              <LectureSideBar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
