import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import Footer from "../Footer/Footer";
import TempStudentPic from "../../../assets/tempTeacherPic.jpg";
import "./ViewDialog.css";

export default function FormDialog(props) {
  const { children } = props;
  const [open, setOpen] = React.useState(false);

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
              <img src={TempStudentPic} alt="Student Profile Pic" />
            </div>
            <div className="user-details">
              <p className="user-name">
                I'm <strong>Saurabh Kumar</strong>
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
                  <p>saurabh124@gmail.com</p>
                  <p>0123456789</p>
                  <p>qwertyuiopasdfghjkl</p>
                  <p>**********</p>
                </div>
              </div>
              <div className="change-password">
                <button className="password-btn">Change Password</button>
                <button className="edit-btn">Edit</button>
              </div>
            </div>
          </div>
          <div className="dialog-menu-footer"></div>
        </div>
      </Dialog>
    </div>
  );
}
