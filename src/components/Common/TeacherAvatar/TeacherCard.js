import React from "react";
import TempTeacherPic from "../../../assets/tempTeacherPic.jpg";
import PhoneCallIcon from "../../../assets/Call-icon.svg";
import EmailIcon from "../../../assets/Email-icon.svg";
import ViewMenu from "../ViewMenu";
import "./TeacherCard.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from "@mui/material/Box";

export default function TeacherCard(props) {
  const { teacherProfilePic, teacherName, specialist, handleEdit, handleDelete,data } = props;

  return (
    <div className="teacherCard">
      {/* <ViewMenu
        parentClassName="optionButton"
        teacherProfilePic={teacherProfilePic}
        teacherName={teacherName}
        specialist={specialist}
      >
        ...
      </ViewMenu> */}
      <Box width="100%" display="flex" flexDirection="column" gap="8px" alignItems="flex-end">
            <Box >
                <EditIcon fontSize="large"  className="action-icon" onClick={()=>handleEdit(data)}/>
            </Box>
            <Box >
              <DeleteIcon fontSize="large"  className="action-icon" onClick={()=>handleDelete(data)}/>
            </Box>
     </Box>
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
