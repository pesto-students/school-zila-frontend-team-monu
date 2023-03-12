import React from "react";
import IconButton from "@mui/material/IconButton";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import "./TopBar.css";

export default function TopBar(props) {
  const { title } = props;
  return (
    <div className="topHeader">
      <p>{title}</p>
      <div className="profileMenu">
        <IconButton color="primary" aria-label="add an alarm">
          <NotificationsNoneOutlinedIcon
            color="disabled"
            style={{ fontSize: "2.5rem" }}
          />
        </IconButton>
        <div className="profileName">
          <p>
            Saurabh k.
            <br />
            Admin
          </p>
        </div>
        <div className="profileAvatar">
          <PermIdentityOutlinedIcon
            color="disabled"
            style={{ fontSize: "2.5rem" }}
          />
        </div>
      </div>
    </div>
  );
}
