import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TempStudentPic from "../../../assets/tempTeacherPic.jpg";
import "./ViewDialog.css";

export default function FormDialog(props) {
  const { children, teacherProfilePic, teacherName, specialist } = props;
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [userData, useUserData] = React.useState({
    email: "Saurabh@gmail.com",
    mobileNo: "0123456789",
    parentName: "abc",
    password: "**********",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {children}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <div className="dialog-menu">
          <div className="dialog-menu-content">
            <div className="user-profile">
              <img
                src={teacherProfilePic ?? TempStudentPic}
                alt="Student Profile Pic"
              />
            </div>
            {edit ? (
              <div className="user-details">
                <p className="user-name">
                  I'm <strong>{teacherName}</strong>
                </p>
                <hr />
                <div className="user-detail">
                  <div className="user-label">
                    <p>EMAIL</p>
                    <p>MOBILE NO</p>
                    <p>PARENT NAME</p>
                    <p>PASSWORD</p>
                  </div>
                  <div className="user-field">
                    <p>{userData.email}</p>
                    <p>{userData.mobileNo}</p>
                    <p>{userData.parentName}</p>
                    <p>{userData.password}</p>
                  </div>
                </div>
                <div className="change-password">
                  <button className="password-btn">Change Password</button>
                  <button className="edit-btn" onClick={() => setEdit(!edit)}>
                    Edit
                  </button>
                </div>
              </div>
            ) : (
              <div className="user-details">
                <p className="user-name">
                  I'm <strong>{teacherName}</strong>
                </p>
                <hr />
                <div className="edit-user-detail">
                  <div className="user-label">
                    <p>EMAIL</p>
                    <p>MOBILE NO</p>
                    <p>PARENT NAME</p>
                    <p>PASSWORD</p>
                  </div>
                  <div className="edit-user-field userDetailForm">
                    <input value={userData.email} required />
                    <input value={userData.mobileNo} required />
                    <input value={userData.parentName} required />
                    <input value={userData.password} required />
                  </div>
                </div>
                <div className="change-password">
                  <button className="edit-btn" onClick={() => setEdit(!edit)}>
                    Save
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="dialog-menu-footer"></div>
        </div>
      </Dialog>
    </div>
  );
}
