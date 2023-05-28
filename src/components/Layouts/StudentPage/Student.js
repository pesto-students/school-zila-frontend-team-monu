import React, { useState, useEffect, useContext } from "react";
import TopBar from "../../Common/TopBar/TopBar";
import { TokenContext } from "../../../contextApi";
// import DataTable from "../../Common/Student/DataTable";
import EnhancedTable from "../../Common/Student/DataTable";
import AddNewMemComp from "../../Common/TopBar/AddNewMemComp";
import serviceAxiosInstance from "../../../service/axiosService";
import AddNewStudent from "./AddNewStudent";
import { STUDENTS_COLUMNS } from "../../../utils/constants";
import "./Student.css";

const rows = [
  {
    id: "#123456789",
    name: "Student 1",
    date: "March 25, 2023",
    parentName: "Parent 1",
    city: "City 1",
    studentGrade: "VII A",
  },
  {
    id: "#123456789",
    name: "Student 1",
    date: "March 25, 2023",
    parentName: "Parent 1",
    city: "City 1",
    studentGrade: "VII A",
  },
  {
    id: "#123456789",
    name: "Student 1",
    date: "March 25, 2023",
    parentName: "Parent 1",
    city: "City 1",
    studentGrade: "VII A",
  },
  {
    id: "#123456789",
    name: "Student 1",
    date: "March 25, 2023",
    parentName: "Parent 1",
    city: "City 1",
    studentGrade: "VII A",
  },
  {
    id: "#123456789",
    name: "Student 1",
    date: "March 25, 2023",
    parentName: "Parent 1",
    city: "City 1",
    studentGrade: "VII A",
  },
  // { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  // { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  // { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  // { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  // { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  // { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  // { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  // { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];


export default function Student({ setShowSideBar }) {
  const [studentData, setStudentData] = useState([]);
  const [addNewBtnClick, setAddNewBtnClick] = useState(false);
  const [formType,setFormType] = useState({status:"ADD",data:null});
  const tokenContext = useContext(TokenContext);

  const structureStudentData = (res)=>{

      let result = res?.map(row=>{
        return {
          id: row?.student_id,
          name: row?.student_name,
          date: row?.student_dob,
          parentName: row?.parent_name,
          city: row?.student_address,
          studentGrade: null,
          data:row,
        }
      });
      console.log("result",result);
      setStudentData(result);
  }
  const handleGetStudentsDetails = async () => {
    try {
      let response = await serviceAxiosInstance({
        url: "/get-all-student",
        method: "POST",
      });
      if (response?.status) {
        structureStudentData(response?.data?.data);
      }
    } catch (e) {
      console.log("Error");
    }
  };

  const handleEdit = (data) => {
    setFormType({status:"EDIT",data:data});
    setAddNewBtnClick(true);
  }
  const handleDelete = () => {
    alert("delete")
  }

  useEffect(() => {
    setShowSideBar(true);
    handleGetStudentsDetails();
  }, []);
  return (
    <>
      {addNewBtnClick ? (
        <AddNewStudent 
        setAddNewBtnClick={setAddNewBtnClick}
        formType={formType} />
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
                {/* <DataTable studentData={studentData} columns={STUDENTS_COLUMNS} /> */}
                <EnhancedTable
                  headCells={STUDENTS_COLUMNS}
                  studentsData={studentData}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
