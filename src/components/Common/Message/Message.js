import React from "react";
import MessageIcon from "../../../assets/Dashboard-images/Message.svg";
import "./Message.css";

export default function Message({ senderName, inClass }) {
  // const {senderName, inClass} = props;
  return (
    <div>
      <div className="common-messages">
        <div className="common-messages-sub">
          <div>{senderName}</div>
          <div>{inClass}</div>
        </div>
        <img src={MessageIcon} alt="Message Icon" />
      </div>
    </div>
  );
}
