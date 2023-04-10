import React, { useEffect} from "react";
import ActivityComponent from "../../Common/ActivityComponent/ActivityComponent";
import Footer from "../../Common/Footer/Footer";
import SideBar from "../../Common/SideBar/SideBar";
import TopBar from "../../Common/TopBar/TopBar";
import "./LatestActivity.css";

export default function LatestActivity({setShowSideBar}) {
  useEffect(() => {
    setShowSideBar(true);
  },[])
  return (
    <>
      <div className="mainContainer">
        <SideBar />
        <div className="mainMiddleContainer">
          <div className="middleContainer">
            <TopBar title="Notification & Latest Activity" />
            <div className="latestActivityContainer">
              <ActivityComponent day="Today" />
              <ActivityComponent day="Yesterday" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
