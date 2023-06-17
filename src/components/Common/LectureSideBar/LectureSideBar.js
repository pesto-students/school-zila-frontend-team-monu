import React from "react";
import TopicCard from "../TopicCard/TopicCard";
import "./LectureSideBar.css";

export default function LectureSideBar() {
  return (
    <div className="analysisLecSideBar">
      <div className="analysisSideBarTopics">
        <p>Topics</p>
      </div>
      <TopicCard />
      <TopicCard />
      <TopicCard />
      <TopicCard />

      <button className="analysisSideBarViewMore">View More</button>
    </div>
  );
}
