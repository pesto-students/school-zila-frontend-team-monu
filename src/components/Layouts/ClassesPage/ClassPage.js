import React, { useEffect } from "react";

import TopBar from "../../Common/TopBar/TopBar";
import ActionAreaCard from "../../Common/ClassCard";
import class1 from "../../../assets/class1.png";
import class2 from "../../../assets/class2.png";
import class3 from "../../../assets/class3.png";
import class4 from "../../../assets/class 4.jpg";
import class5 from "../../../assets/class5.png";
import class6 from "../../../assets/class6.png";
import class7 from "../../../assets/Class Icons-03.png";
import class8 from "../../../assets/class8.png";
import class9 from "../../../assets/Class Icons-09.png";
import class10 from "../../../assets/class110.png";
import class11 from "../../../assets/class11.png";
import class12 from "../../../assets/class12.png";
import English from "../../../assets/englishIcon.webp";
import Hindi from "../../../assets/HindiIcon.webp";
import Accounts from "../../../assets/accountancyIcon.webp";
import Biology from "../../../assets/biologyIcon.webp";
import Business from "../../../assets/business-studiesIcon.webp";
import Chemistry from "../../../assets/chemistryIcon.webp";
import Computer from "../../../assets/computerIcon.webp";
import Evs from "../../../assets/evsIcons.webp";
import Geography from "../../../assets/geographyIcon.png";
import GK from "../../../assets/gkIcon.webp";
import Maths from "../../../assets/mathsIcon.webp";
import PhyscialEDU from "../../../assets/physical-educationIcon.webp";
import Physics from "../../../assets/physicsIcon.webp";
import PoliticalS from "../../../assets/political-scienceIcons.webp";
import Psychology from "../../../assets/psychologyIcon.png";
import Sanskrit from "../../../assets/sanskritIcon.webp";
import Science from "../../../assets/scienceIcon.webp";
import SocialS from "../../../assets/social-scienceIcon.webp";
import Sociology from "../../../assets/sociologyIcon.png";
import Economics from "../../../assets/economicsIcon.webp";

export default function ClassPage({ setShowSideBar }) {
  const classes = [
    {
      class: "1",
      asset: class1,
      subject: [Hindi, English, Evs, Maths, GK, Computer],
    },
    {
      class: "2",
      asset: class2,
      subject: [Hindi, English, Evs, Maths, GK, Computer],
    },
    {
      class: "3",
      asset: class3,
      subject: [Hindi, English, Evs, Maths, GK, Computer],
    },
    {
      class: "4",
      asset: class4,
      subject: [Hindi, English, Evs, Maths, GK, Computer],
    },
    {
      class: "5",
      asset: class5,
      subject: [Hindi, English, Evs, Maths, GK, Computer],
    },
    {
      class: "6",
      asset: class6,
      subject: [Hindi, English, Science, Maths, SocialS, Sanskrit, Computer],
    },
    {
      class: "7",
      asset: class7,
      subject: [Hindi, English, Science, Maths, SocialS, Sanskrit, Computer],
    },
    {
      class: "8",
      asset: class8,
      subject: [Hindi, English, Science, Maths, SocialS, Sanskrit, Computer],
    },
    {
      class: "9",
      asset: class9,
      subject: [Hindi, English, Science, Maths, SocialS, Sanskrit],
    },
    {
      class: "10",
      asset: class10,
      subject: [Hindi, English, Science, Maths, SocialS, Sanskrit],
    },
    {
      class: "11",
      asset: class11,
      subject: [
        Maths,
        Biology,
        Physics,
        Chemistry,
        Business,
        PhyscialEDU,
        PoliticalS,
        Sociology,
        Psychology,
        English,
      ],
    },
    {
      class: "12",
      asset: class12,
      subject: [
        Accounts,
        Biology,
        Physics,
        Chemistry,
        Economics,
        Business,
        PhyscialEDU,
        PoliticalS,
        Sociology,
        Psychology,
        English,
        Geography,
        Maths,
      ],
    },
  ];

  useEffect(() => {
    setShowSideBar(true);
  }, []);
  return (
    <>
      {
        <div className="mainContainer">
          <div className="mainMiddleContainer">
            <div className="middleContainer">
              <TopBar title="Class" />
              <div className="subjects">
                <div className="subjectHeader">
                  <p>Classes</p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {classes.map((el) => {
                    return (
                      <ActionAreaCard
                        ClassIcon={el.asset}
                        SubjectIcon={el.subject}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
