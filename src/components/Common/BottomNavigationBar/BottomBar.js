import React, { useState } from "react";
import BackArrow from "../../../assets/backArrow.svg";
import ForwardArrow from "../../../assets/forwardArrow.svg";
import "./BottomBar.css";

export default function BottomNavigationBar() {
  // const [activePage, setActivePage] = useState('');

  return (
    <div className="navigationBar">
      <p>
        Showing <strong>1-5</strong> from <strong>100</strong> data
      </p>
      <div className="pageNavigation">
        <img src={BackArrow} alt="back arrow" />
        <button className="activePage">1</button>
        <button className="pageNumber">2</button>
        <button className="pageNumber">3</button>
        <img src={ForwardArrow} alt="forward arrow" />
      </div>
    </div>
  );
}
