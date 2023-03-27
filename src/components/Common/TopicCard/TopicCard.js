import React from "react";
import CalenderIcon from "../../../assets/Calendar-icon.svg";
import ClockIcon from "../../../assets/Clock-icon.svg";
import tempTopicAvatar from "../../../assets/tempTeacherPic.jpg";

import "./TopicCard.css";

export default function TopicCard() {
  return (
    <div className="analysisSideBarIntroduction">
      <div>
        <p className="topicHeader">Introduction</p>
        <p>Subject</p>
      </div>
      <div className="topicDetails">
        <div className="topicDetailLeftDiv">
          <div className="topicCalender">
            <img src={CalenderIcon} alt="Calender Icon" />
            <p>March 20, 2021</p>
          </div>
          <div className="topicTiming">
            <img src={ClockIcon} alt="Clock Icon" />
            <p>09:00 - 10:00 AM</p>
          </div>
        </div>
        <div className="topicAvatar">
          <img src={tempTopicAvatar} alt="Topic Avatar" />
        </div>
      </div>
    </div>
  );
}
