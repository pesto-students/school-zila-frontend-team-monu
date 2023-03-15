import React from "react";
import "./Notification.css";

export default function Notification({senderName, info}) {
    // const {senderName, inClass} = props;
  return (
    <div>
        <div className="common-messages">
        <div className="common-messages-sub">
          <div>{senderName}</div>
          <div>{info}</div>
        </div>
      </div>
    </div>
  );
}