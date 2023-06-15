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
  const [formType, setFormType] = useState({ status: "ADD", data: null });

  const structureData = (students) => {
    let arr = [];
    students?.map((student) => {
      let obj = {
        teacherName: student?.teacher_name,
        teacherEmail: student?.teacher_email,
        teacherPassword: student?.teacher_password,
        teacherPhone: student?.teacher_phone,
        teacherAddress: student?.teacher_address,
        teacherCity: student?.teacher_city,
        teacherPhoto: null,
        teacherDob: student?.teacher_dob,
        teacherSpecialization: student?.teacher_specialization,
        teacherUniversity: student?.teacher_university,
        teacherDegree: student?.teacher_degree,
        teacherStartDate: student?.teacher_start_date,
        teacherEndDate: student?.teacher_end_date,
      };
      arr.push(obj);
    });
    setTeacherData(arr);
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
        structureData(response.data?.data);
      }
    } catch (e) {
      console.log("Error", e);
    }
  };

  const handleEdit = (data) => {
    formType.status = "EDIT";
    formType.data = data;
    setFormType({ ...formType });
    setAddNewBtnClick(true);
  };

  const handleDelete = async (data) => {
    console.log("========del==", data);
    try {
      let payload = {
        teacher_email: data?.teacherEmail,
        role: "TEACHER",
      };
      let response = await serviceAxiosInstance({
        url: "/delete-user",
        method: "POST",
        data: payload,
      });
      alert(response?.data?.message);
      window.location.reload();
    } catch (e) {
      alert(e?.data?.message || e?.message || e?.data || e?.toString());
    }
  };

  useEffect(() => {
    handleGetTeachersDetails();
  }, []);
  return (
    <>
      {addNewBtnClick ? (
        <AddNewTeacher
          setAddNewBtnClick={setAddNewBtnClick}
          formType={formType}
          setFormType={setFormType}
        />
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
                        data={data}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
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
