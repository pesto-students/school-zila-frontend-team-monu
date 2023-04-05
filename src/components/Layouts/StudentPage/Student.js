import React, { useState, useEffect } from "react";
import TopBar from "../../Common/TopBar/TopBar";
import DataTable from "../../Common/Student/DataTable";
import "./Student.css";
import AddNewMemComp from "../../Common/TopBar/AddNewMemComp";
import serviceAxiosInstance from "../../../service/axiosService";
import { STUDENTS_COLUMNS } from "../../../../src/utils/constants";
import AddNewStudent from "./AddNewStudent";

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function Student({setShowSideBar}) {
  useEffect(()=> {
    setShowSideBar(true);
  },[]);

  const [studentData, setStudentData] = useState(rows);
  const [addNewBtnClick, setAddNewBtnClick] = useState(false);
  console.log("addnewBTnClick",addNewBtnClick)
  useEffect(() => {
    handleGetStudentsDetails();
  }, []);

  const handleGetStudentsDetails = async () => {
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
        setStudentData(response.data);
      }
    } catch (e) {
      console.log("Error");
    }
  };

  return (
    <>
      {addNewBtnClick ? (
        <AddNewStudent setAddNewBtnClick={setAddNewBtnClick} />
      ) : (
        <div className="mainContainer">
          <div className="mainMiddleContainer">
            <div className="middleContainer">
                <TopBar title="Student" />
                <AddNewMemComp
                  buttonTitle="New Student"
                  setAddNewBtnClick={setAddNewBtnClick}
                />
                <div className="studentDetail">
                  <DataTable
                    studentData={studentData}
                    columns={STUDENTS_COLUMNS}
                  />
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
