import React from "react";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import schoolLogo from "../../../assets/Screenshot (7) 4.png";
import { ReactComponent as copyRightLogo } from "../../../assets/Copyright-2023_-School-Zilla-Pvt.-Ltd..svg";
import "./Footer.css";

export default function Footer() {
  const iconStyle = {
    fontSize: "2.5rem",
  };

  return (
    <div className="footer">
      <img src={schoolLogo} alt="" />
      <p>@Copyright 2023, School Zilla Pvt. Ltd.</p>
      <div className="promoContainer">
        <LinkedInIcon style={iconStyle} />
        <FacebookIcon style={iconStyle} />
        <InstagramIcon style={iconStyle} />
        <TwitterIcon style={iconStyle} />
      </div>
    </div>
  );
}
