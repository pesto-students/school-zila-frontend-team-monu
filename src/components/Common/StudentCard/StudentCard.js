import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ContactIcon from "../../../assets/StudentContact-icon.svg";
import EmailIcon from "../../../assets/StudentEmail-icon.svg";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "./StudentCard.css";
import Box from "@mui/material/Box";

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


export function StudentAction(handleEdit,handleDelete,data) {
  return <Box display="flex" gap="12px" justifyContent="flex-end">
            <Box onClick={()=>handleEdit(data)}>
                <EditIcon fontSize="large"/>
            </Box>
            <Box onClick={()=>handleDelete(data)}>
              <DeleteIcon fontSize="large"/>
            </Box>
  </Box>
}
