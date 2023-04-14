import React, { useState } from "react";
import TopBar from "../../Common/TopBar/TopBar";
import tempVideo from "../../../assets/mov_bbb.mp4";
import "./AnalysisLecture.css";
import LectureSideBar from "../../Common/LectureSideBar/LectureSideBar";

let dummyDescription = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
doloremque architecto dolore, rem labore minus commodi
libero earum id, quas provident quidem. Quisquam, veritatis
fuga magni soluta esse ad ducimus eligendi illo ratione
aliquam, cum animi, corporis dignissimos numquam porro
consequatur ipsum laudantium suscipit expedita doloremque!
Corporis fuga inventore error.
Lorem, ipsum dolor sit amet consectetur adipisicing elit.
Iste suscipit aliquam sed atque tempore, vero quisquam quis
dicta aut, nobis magni qui, quas cupiditate in reprehenderit
possimus? Consequatur culpa fuga reiciendis delectus saepe
quod distinctio repellat odit aut sed voluptates commodi
itaque, aspernatur magnam debitis nemo alias suscipit quidem
deserunt!`;

export default function AnalysisLecture(props) {
  const { setOpenLecture } = props;
  const [description, setdescription] = useState(dummyDescription);
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
                  <source src={tempVideo} type="video/mp4"></source>
                </video>
                <div className="lectureDetail">
                  <p className="lectureDetailHeader">Lecture Detail</p>
                  <p>{description}</p>
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
