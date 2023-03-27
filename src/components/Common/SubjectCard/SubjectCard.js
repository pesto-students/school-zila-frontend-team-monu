import React from "react";
import { Link } from "react-router-dom";
import TempSubjectPic from "../../../assets/tempTeacherPic.jpg";
import StarIcon from "../../../assets/Star-icon.svg";
import ViewsIcon from "../../../assets/Views-icon.svg";
import "./SubjectCard.css";

export default function SubjectCard() {
  return (
    <div className="subjectDetail">
      <div className="subAvatar">
        <img src={TempSubjectPic} alt="Subject Picture" />
        <div className="selectSubjectDiv">
          {/* <ColorButtons parentClassName="selectSubject">Select</ColorButtons> */}
          <Link to="/analysis-lecture">
            <button className="selectSubject">Select</button>
          </Link>
          <p>Subject 1</p>
        </div>
      </div>
      <div className="subStats">
        <div className="rating">
          <img src={StarIcon} alt="Start Icon" />
          <p>4.9</p>
        </div>
        <div className="views">
          <img src={ViewsIcon} alt="View Icon" />
          <div className="noOfView">
            <p>1.456</p>
            <p className="subjectViews">Views</p>
          </div>
        </div>
      </div>
      <div className="subTeachersName">
        <p>Teacher Name</p>
      </div>
    </div>
  );
}
