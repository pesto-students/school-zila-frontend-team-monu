import ContactIcon from "../../../assets/StudentContact-icon.svg";
import EmailIcon from "../../../assets/StudentEmail-icon.svg";
import teacherProfilePic from "../../../assets/tempTeacherPic.jpg";
import ViewMenu from "../ViewMenu";

import "./StudentCard.css";

export function StudentName(studentName, studentImage) {
  return (
    <div className="studentName">
      <img src={studentImage} alt="Student Image" />
      <p>{studentName}</p>
    </div>
  );
}

export function StudentId(studentId) {
  return <p className="student-id">{studentId}</p>;
}

export function Date(date) {
  return <p className="student-date">{date}</p>;
}

export function ParentName(studentPname) {
  return <p className="students-parentName">{studentPname}</p>;
}

export function City(city) {
  return <p className="student-city">{city}</p>;
}

export function Contact() {
  return (
    <div className="student-contact">
      <button className="contact-btn">
        <img src={ContactIcon} alt="Student Contact Icon" />
      </button>
      <button className="email-btn">
        <img src={EmailIcon} alt="Student Email Icon" />
      </button>
    </div>
  );
}

export function StudentGrade(studentGrade) {
  return (
    <div className="student-grade">
      <p>{studentGrade}</p>
    </div>
  );
}

export function StudentAction(studentName, studentID) {
  // return <MoreHorizIcon style={{ fontSize: "2.2rem", color: "#A098AE" }} />;
  return (
    <ViewMenu
      parentClassName=""
      teacherProfilePic={teacherProfilePic}
      teacherName={studentName}
      specialist={studentID}
    >
      ...
    </ViewMenu>
  );
}
