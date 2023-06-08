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

export default function ClassPage({ setShowSideBar }) {
  const classes = [
    {
      class: "1",
      asset: class1,
    },
    {
      class: "2",
      asset: class2,
    },
    {
      class: "1",
      asset: class3,
    },
    {
      class: "1",
      asset: class4,
    },
    {
      class: "1",
      asset: class5,
    },
    {
      class: "1",
      asset: class6,
    },
    {
      class: "1",
      asset: class7,
    },
    {
      class: "1",
      asset: class8,
    },
    {
      class: "1",
      asset: class9,
    },
    {
      class: "1",
      asset: class10,
    },
    {
      class: "1",
      asset: class11,
    },
    {
      class: "1",
      asset: class12,
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
                    return <ActionAreaCard ClassIcon={el.asset} />;
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
