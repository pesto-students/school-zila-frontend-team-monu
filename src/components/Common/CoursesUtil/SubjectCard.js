import React from "react";
import LectureImg from "../../../assets/LectureImg.jpg";
import StarIcon from "../../../assets/Star-icon.svg";
import ViewsIcon from "../../../assets/Views-icon.svg";
import "./SubjectCard.css";

export default function SubjectCard({ props }) {
  const {
    setOpenLecture,
    setLectureDetails,
    topicImage,
    topicName,
    teacherName,
    views,
    rating,
    lectureUrl,
    lectureDetail,
    grade,
  } = props;
  return (
    <div className="subjectDetail">
      <div className="subAvatar">
      <img src={LectureImg} alt="Subject Picture" />
        <div className="selectSubjectDiv">
          <button
            className="selectSubject"
            onClick={() => {
              setLectureDetails({ lectureUrl, lectureDetail });
              setOpenLecture(true);
            }}
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
      <div className="grade">
        <p id="grade">{`${grade}st Grade`}</p>
      </div>
      <div className="subTeachersName">
        <p id="teacherName">{teacherName}</p>
      </div>
    </div>
  );
}
