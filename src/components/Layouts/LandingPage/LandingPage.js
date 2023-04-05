import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import LandingPageImage from "../../../assets/Landing-page-image.jpg";
import SchoolImage from "../../../assets/Landing-page-school-image.png";
import StarIcon from "../../../assets/Star-icon.svg";
import StatsIcon from "../../../assets/Views-icon.svg";
import ArrowIcon from "../../../assets/Arrow-icon.svg";
import "./LandingPage.css";

export default function LandingPage({ setShowSideBar}) {
  useEffect(()=> {
    setShowSideBar(false);
  },[]);

  return (
    <>
      <div className="landingPageContainer">
        <div className="landingPageHeader">
          <p>School Landing Page</p>
        </div>
        <div className="midContainer">
          <div className="midLeftContainer">
            <img src={LandingPageImage} alt="landing page image" />
          </div>
          <div className="midRightContainer">
            <div className="schoolDetailHeader">
              <div className="schoolImage">
                <img src={SchoolImage} alt="School Image" />
              </div>
              <div className="schoolDetail">
                <p className="schoolTitle">schoolName</p>
                <Link to="/login">
                  <button className="schoolLoginBtn">Login</button>
                </Link>
                <p className="schoolSmallDetails">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  error odit officia eius iste voluptatem laudantium? Recusandae
                  deserunt rem eius impedit esse, dolores reiciendis voluptatem,
                  voluptates atque quod, rerum nobis.
                </p>
              </div>
            </div>
            <div className="schoolStats">
              <div className="schoolRating">
                <p className="schoolStatsText2">Rating</p>
                <div className="rating">
                  <img src={StarIcon} alt="Start Icon" />
                  <p className="schoolStatsText1">4.9</p>
                </div>
              </div>
              <div className="schoolViews">
                <img src={StatsIcon} alt="Stats Icon" />
                <div className="stats">
                  <p className="schoolStatsText1">3456</p>
                  <p className="schoolStatsText2">Stats</p>
                </div>
              </div>
              <div className="schoolIntrest">
                <img src={ArrowIcon} alt="Arrow Icon" />
                <div className="intrest">
                  <p className="schoolStatsText1">16%</p>
                  <p className="schoolStatsText2">Intrest</p>
                </div>
              </div>
            </div>
            <div className="schoolQualities">
              <div className="qualitieLeftDiv">
                <p className="qualitieHeader">Ameinities</p>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam, maxime!
                  </li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni.
                  </li>
                </ul>
              </div>
              <div className="qualitieRightDiv">
                <p className="qualitieHeader">Address</p>
                <p className="address">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
