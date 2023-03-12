import React from "react";
import TempTeacherPic from "../../../assets/tempTeacherPic.jpg";
import PhoneCallIcon from "../../../assets/Call-icon.svg";
import EmailIcon from "../../../assets/Email-icon.svg";
import ColorButtons from "../../Button";
import "./TeacherCard.css";

export default function TeacherCard(props) {
  const { teacherProfilePic, teacherName, specialist } = props;
  console.log(props);

  return (
    <div className="teacherCard">
      <ColorButtons parentClassName="optionButton">...</ColorButtons>
      <div className="teachersDetails">
        <div className="avatar">
          <img
            src={teacherProfilePic ?? TempTeacherPic}
            alt="Teacher Profile Pic"
          />
        </div>
        <div className="details">
          <p className="teacherName">{teacherName}</p>
          <p className="teacherSpecialist">{specialist}</p>
        </div>
        <div className="contact">
          <button>
            <img src={PhoneCallIcon} alt="" />
          </button>
          <button>
            <img src={EmailIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
