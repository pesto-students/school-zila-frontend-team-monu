import React, { useState, useEffect } from "react";
import SideBar from "../../Common/SideBar/SideBar";
import TeacherCard from "../../Common/TeacherAvatar/TeacherCard";
import "./Teacher.css";
import BottomNavigationBar from "../../Common/BottomNavigationBar/BottomBar";
import Footer from "../../Common/Footer/Footer";
import TopBar from "../../Common/TopBar/TopBar";
import AddNewMemComp from "../../Common/TopBar/AddNewMemComp";
import serviceAxiosInstance from "../../../service/axiosService";

const rows = [
  {
    teacherProfilePic: null,
    teacherName: "Saurabh",
    specialist: "CSE",
  },
  {
    teacherProfilePic: null,
    teacherName: "Vishal",
    specialist: "CSE",
  },
  {
    teacherProfilePic: null,
    teacherName: "Monu",
    specialist: "CSE",
  },
  {
    teacherProfilePic: null,
    teacherName: "Gyan",
    specialist: "CSE",
  },
  {
    teacherProfilePic: null,
    teacherName: "Saurabh",
    specialist: "CSE",
  },
  {
    teacherProfilePic: null,
    teacherName: "Vishal",
    specialist: "CSE",
  },
  {
    teacherProfilePic: null,
    teacherName: "Monu",
    specialist: "CSE",
  },
  {
    teacherProfilePic: null,
    teacherName: "Gyan",
    specialist: "CSE",
  },
  {
    teacherProfilePic: null,
    teacherName: "Saurabh",
    specialist: "CSE",
  },
  {
    teacherProfilePic: null,
    teacherName: "Vishal",
    specialist: "CSE",
  },
  {
    teacherProfilePic: null,
    teacherName: "Monu",
    specialist: "CSE",
  },
  {
    teacherProfilePic: null,
    teacherName: "Gyan",
    specialist: "CSE",
  },
  {
    teacherProfilePic: null,
    teacherName: "Saurabh",
    specialist: "CSE",
  },
  {
    teacherProfilePic: null,
    teacherName: "Vishal",
    specialist: "CSE",
  },
  {
    teacherProfilePic: null,
    teacherName: "Monu",
    specialist: "CSE",
  },
  {
    teacherProfilePic: null,
    teacherName: "Gyan",
    specialist: "CSE",
  },
];

export default function Teacher() {
  const [teacherData, setTeacherData] = useState(rows);

  useEffect(() => {
    handleGetTeachersDetails();
  }, []);

  const handleGetTeachersDetails = async () => {
    try {
      let payload = {
        schoolId: "",
      };
      let response = await serviceAxiosInstance({
        // url of the api endpoint (can be changed)
        url: "student/",
        method: "POST",
        data: payload,
      });
      if (response?.status) {
        setTeacherData(response.data);
      }
    } catch (e) {
      console.log("Error");
    }
  };

  return (
    <>
      <div className="mainContainer">
        <SideBar />
        <div className="middleContainer">
          <TopBar title="Teacher" />
          <AddNewMemComp buttonTitle="New Teacher" route="/add-teacher" />
          <div className="teacherList">
            <div className="teacherListRow1">
              <div style={{  }}>
                {teacherData.map((data) => (
                  <div style={{float:'left', marginRight:'0.5vw',  }}>
                    <TeacherCard
                      teacherProfilePic={data.teacherProfilePic}
                      teacherName={data.teacherName}
                      specialist={data.specialist}
                    />
                  </div>
                ))}
              </div>
            </div>
            <BottomNavigationBar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
