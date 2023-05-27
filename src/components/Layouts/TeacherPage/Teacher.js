import React, { useState, useEffect } from "react";
import TeacherCard from "../../Common/TeacherAvatar/TeacherCard";
import BottomNavigationBar from "../../Common/BottomNavigationBar/BottomBar";
import TopBar from "../../Common/TopBar/TopBar";
import AddNewMemComp from "../../Common/TopBar/AddNewMemComp";
import serviceAxiosInstance from "../../../service/axiosService";
import AddNewTeacher from "./AddNewTeacher";
import "./Teacher.css";

export default function Teacher({ setShowSideBar }) {
  useEffect(() => {
    setShowSideBar(true);
  }, []);

  const [teacherData, setTeacherData] = useState([]);
  const [addNewBtnClick, setAddNewBtnClick] = useState(false);

  const structureStudentData = (res) => {
    let result = res?.map((row) => {
      return {
        teacherProfilePic: null,
        teacherName: row?.teacher_name,
        specialist: "",
      };
    });
    setTeacherData(result);
  };
  const handleGetTeachersDetails = async () => {
    try {
      let payload = {
        schoolId: "",
      };
      let response = await serviceAxiosInstance({
        // url of the api endpoint (can be changed)
        url: "/teacher",
        method: "GET",
      });
      if (response?.status) {
        structureStudentData(response.data?.data);
      }
    } catch (e) {
      console.log("Error");
    }
  };
  useEffect(() => {
    handleGetTeachersDetails();
  }, []);
  return (
    <>
      {addNewBtnClick ? (
        <AddNewTeacher setAddNewBtnClick={setAddNewBtnClick} />
      ) : (
        <div className="mainContainer">
          <div className="middleContainer">
            <TopBar title="Teacher" />
            <AddNewMemComp
              buttonTitle="New Teacher"
              setAddNewBtnClick={setAddNewBtnClick}
            />
            <div className="teacherList">
              <div className="teacherListRow1">
                <div style={{}}>
                  {teacherData.map((data) => (
                    <div style={{ float: "left", marginRight: "0.5vw" }}>
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
      )}
    </>
  );
}
