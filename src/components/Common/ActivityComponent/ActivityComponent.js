import React from "react";
import Activity from "../Activity/Activity";
import "./ActivityComponent.css";

export default function ActivityComponent(props) {
  return (
    <div className="latestActivity">
      <div className="activityDay">
        <p>{props.day}</p>
      </div>
      <Activity>
        <strong className="owner">Karen Hope</strong> has created new task at{" "}
        <strong className="subject">History Lesson</strong>
      </Activity>
      <Activity>
        <strong className="owner">Karen Hope</strong> has created new task at{" "}
        <strong className="subject">History Lesson</strong>
      </Activity>
      <Activity>
        <strong className="owner">Karen Hope</strong> has created new task at{" "}
        <strong className="subject">History Lesson</strong>
      </Activity>
      <Activity>
        <strong className="owner">Karen Hope</strong> has created new task at{" "}
        <strong className="subject">History Lesson</strong>
      </Activity>
    </div>
  );
}
