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
  return <p>{studentId}</p>;
}

export function Date(date) {
  return <p>{date}</p>;
}

export function ParentName(studentPname) {
  return <p>{studentPname}</p>;
}

export function City(city) {
  return <p>{city}</p>;
}

export function Contact() {
  return <p>date</p>;
}

export function StudentGrade(studentGrade) {
  return <p>{studentGrade}</p>;
}

export function StudentAction() {
  return <p>Action</p>;
}
