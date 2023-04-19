import React from "react";
import { Link } from "react-router-dom";
import TempSubjectPic from "../../../assets/tempTeacherPic.jpg";
import LectureImg from "../../../assets/LectureImg.jpg";
import StarIcon from "../../../assets/Star-icon.svg";
import ViewsIcon from "../../../assets/Views-icon.svg";
import "./SubjectCard.css";

export default function SubjectCard({props}) {
  const { setOpenLecture, topicImage, topicName, teacherName, views, rating } = props;
  return (
    <div className="subjectDetail">
      <div className="subAvatar">
        <img src={LectureImg} alt="Subject Picture" />
        <div className="selectSubjectDiv">
          <button
            className="selectSubject"
            onClick={() => setOpenLecture(true)}
          >
            Select
          </button>
          <p>{topicName}</p>
        </div>
      </div>
      <div className="subStats">
        <div className="rating">
          <img src={StarIcon} alt="Start Icon" />
          <p>{rating}</p>
        </div>
        <div className="views">
          <img src={ViewsIcon} alt="View Icon" />
          <div className="noOfView">
            <p>{views}</p>
            <p className="subjectViews">Views</p>
          </div>
        </div>
      </div>
      <div className="subTeachersName">
        <p>{teacherName}</p>
      </div>
    </div>
  );
}
