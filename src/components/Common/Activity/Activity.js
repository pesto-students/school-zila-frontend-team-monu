import React from "react";
import "./Activity.css";

export default function Activity(props) {
  return (
    <div className="activityContainer">
      <div className="activityBulletPoint" />
      <div className="activityTopContainer">
        <p className="activityDate">Monday, June 31 2023</p>
        <p className="activity">{props.children}</p>
      </div>
    </div>
  );
}
