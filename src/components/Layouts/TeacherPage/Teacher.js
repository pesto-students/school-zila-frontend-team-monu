import React from "react";
import SideBar from "../../Common/SideBar/SideBar";
import TeacherCard from "../../Common/TeacherAvatar/TeacherCard";
import "./Teacher.css";
import BottomNavigationBar from "../../Common/BottomNavigationBar/BottomBar";
import Footer from "../../Common/Footer/Footer";
import TopBar from "../../Common/TopBar/TopBar";
import AddNewMemComp from "../../Common/TopBar/AddNewMemComp";

export default function Teacher() {
  return (
    <>
      <div className="mainContainer">
        <SideBar />
        <div className="middleContainer">
          <TopBar title="Teacher" />
          <AddNewMemComp buttonTitle="New Teacher" />
          <div className="teacherList">
            <div className="teacherListRow1">
              <TeacherCard
                teacherProfilePic={null}
                teacherName="Saurabh"
                specialist="CSE"
              />
              <TeacherCard
                teacherProfilePic={null}
                teacherName="Saurabh"
                specialist="CSE"
              />
              <TeacherCard
                teacherProfilePic={null}
                teacherName="Saurabh"
                specialist="CSE"
              />
              <TeacherCard
                teacherProfilePic={null}
                teacherName="Saurabh"
                specialist="CSE"
              />
              <TeacherCard
                teacherProfilePic={null}
                teacherName="Saurabh"
                specialist="CSE"
              />
            </div>
            <div className="teacherListRow2">
              <TeacherCard
                teacherProfilePic={null}
                teacherName="Saurabh"
                specialist="CSE"
              />
              <TeacherCard
                teacherProfilePic={null}
                teacherName="Saurabh"
                specialist="CSE"
              />
              <TeacherCard
                teacherProfilePic={null}
                teacherName="Saurabh"
                specialist="CSE"
              />
              <TeacherCard
                teacherProfilePic={null}
                teacherName="Saurabh"
                specialist="CSE"
              />
              <TeacherCard
                teacherProfilePic={null}
                teacherName="Saurabh"
                specialist="CSE"
              />
            </div>
            <BottomNavigationBar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
