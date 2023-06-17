import React, { useState, useEffect, useContext } from "react";

import TopBar from "../../Common/TopBar/TopBar";
import { TokenContext } from "../../../contextApi";
import EnhancedTable from "../../Common/Student/DataTable";
import AddNewMemComp from "../../Common/TopBar/AddNewMemComp";
import serviceAxiosInstance from "../../../service/axiosService";
import AddNewStudent from "./AddNewStudent";
import "./Student.css";

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "id",
    numeric: true,
    disablePadding: false,
    label: "ID",
  },
  {
    id: "date",
    numeric: true,
    disablePadding: false,
    label: "Date",
  },
  {
    id: "pname",
    numeric: true,
    disablePadding: false,
    label: "Parent Name",
  },
  {
    id: "city",
    numeric: true,
    disablePadding: false,
    label: "City",
  },
  {
    id: "contact",
    numeric: true,
    disablePadding: false,
    label: "Contact",
  },
  {
    id: "action",
    numeric: true,
    disablePadding: false,
    label: "Action",
  },
];

const rows = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "id",
    numeric: true,
    disablePadding: false,
    label: "ID",
  },
  {
    id: "date",
    numeric: true,
    disablePadding: false,
    label: "Date",
  },
  {
    id: "pname",
    numeric: true,
    disablePadding: false,
    label: "Parent Name",
  },
  {
    id: "city",
    numeric: true,
    disablePadding: false,
    label: "City",
  },
  {
    id: "contact",
    numeric: true,
    disablePadding: false,
    label: "Contact",
  },
  {
    id: "action",
    numeric: true,
    disablePadding: false,
    label: "Action",
  },
];

export default function Student({ setShowSideBar }) {
  const [studentData, setStudentData] = useState([]);
  const [addNewBtnClick, setAddNewBtnClick] = useState(false);
  const [formType, setFormType] = useState({ status: "ADD", data: null });
  const tokenContext = useContext(TokenContext);

  const structureStudentData = (res) => {
    let result = res?.map((row) => {
      return {
        id: row?.student_id || "-",
        name: row?.student_name || "-",
        date: row?.student_dob || "-",
        parentName: row?.parent_name || "-",
        city: row?.student_address || "-",
        email: row?.stuent_email,
        mobile: row?.student_mobile,
        data: row,
      };
    });
    setStudentData(result);
  };
  const handleGetStudentsDetails = async () => {
    try {
      let response = await serviceAxiosInstance({
        url: "/get-all-student",
        method: "GET",
      });
      if (response?.status) {
        structureStudentData(response?.data?.data);
      }
    } catch (e) {
      console.log("Error", e);
    }
  };

  const handleEdit = (data) => {
    setFormType({ status: "EDIT", data: data });
    setAddNewBtnClick(true);
  };
  const handleDelete = async (data) => {
    try {
      let payload = {
        student_email: data?.data?.student_email,
        role: "STUDENT",
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
    setShowSideBar(true);
    handleGetStudentsDetails();
  }, []);
  return (
    <>
      {addNewBtnClick ? (
        <AddNewStudent
          setAddNewBtnClick={setAddNewBtnClick}
          formType={formType}
        />
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
                  headCells={headCells}
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
