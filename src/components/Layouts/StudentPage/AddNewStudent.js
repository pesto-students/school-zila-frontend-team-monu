import React, { useEffect, useState } from "react";
import TopBar from "../../Common/TopBar/TopBar";
// import NewEntityButton from "../../Button";
import Box from "@mui/material/Box";
import BackIcon from "@mui/icons-material/KeyboardBackspace";
import NewEntityButton from "../../Common/NewEntityButton";

import serviceAxiosInstance from "../../../service/axiosService";
import ToasterSnackbar from "../../Common/Toaster/toasterAlerts";
import { TOASTER_STATUS } from "../../../../src/utils/constants";
import { updateTosterStatus } from "../../../utils/commonService";
import "./AddNewStudent.css";

let snackBarMessage = "";
const initialStudentData = {
  studentImage: null,
  schoolUuid: "",
  studentName: "",
  studentPassword: "",
  studentEmail: "",
  studentDob: "",
  studentPhone: "",
  studentAddress: "",
  parent1Name: "",
  parent1Relationship: "",
  parent1Email: "",
  parent1Phone: "",
  role: "",
};

export default function AddNewStudent({ setAddNewBtnClick, formType }) {
  const [openToaster, setOpenToaster] = useState(false);
  const [alertStatus, setAlertStatus] = useState(null);

  const [studentData, setStudentData] = useState(initialStudentData);
  const [classList,setClassList] = useState([]);
  const handleStudentForm = async () => {
    try {
      let payload = {
        student_name: studentData?.studentName,
        student_email: studentData?.studentEmail,
        student_password: studentData?.studentPassword,
        student_dob: studentData?.studentDob,
        student_mobile: studentData?.studentPhone,
        student_address: studentData?.studentAddress,
        parent_name: studentData?.parent1Name,
        parent_relationship: studentData?.parent1Relationship,
        parent_email: studentData?.parent1Email,
        parent_mobile: studentData?.parent1Phone,
        school_uuid: localStorage.getItem("school_uuid"),
        role: "STUDENT",
      };
      let response = await serviceAxiosInstance({
        // url of the api endpoint (can be changed)
        url: "/signup",
        method: "POST",
        data: payload,
      });
      if (response?.status) {
        snackBarMessage = response?.message;
        setAddNewBtnClick(false);
        updateTosterStatus(
          setOpenToaster,
          setAlertStatus,
          TOASTER_STATUS.SUCCESS
        );
      } else {
        snackBarMessage = response?.message;
        updateTosterStatus(
          setOpenToaster,
          setAlertStatus,
          TOASTER_STATUS.ERROR
        );
      }
    } catch (e) {
      snackBarMessage = response?.message;
      updateTosterStatus(setOpenToaster, setAlertStatus, TOASTER_STATUS.ERROR);
      console.log("Error");
    }
  };

  const handleStudentEdit = async () => {
    try {
      let payload = {
        student_name: studentData?.studentName,
        student_email: studentData?.studentEmail,
        student_dob: studentData?.studentDob,
        student_mobile: studentData?.studentPhone,
        student_address: studentData?.studentAddress,
        parent_name: studentData?.parent1Name,
        parent_relationship: studentData?.parent1Relationship,
        parent_email: studentData?.parent1Email,
        parent_mobile: studentData?.parent1Phone,
        role: "STUDENT",
      };
      let response = await serviceAxiosInstance({
        url: "/edit-student",
        method: "POST",
        data: payload,
      });
      window.location.reload();
    } catch (err) {
      snackBarMessage = err?.message;
      updateTosterStatus(setOpenToaster, setAlertStatus, TOASTER_STATUS.ERROR);
    }
  };
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event?.target;
    setStudentData({ ...studentData, [name]: value });
  };
  const getClassList = async() => {
    let payload = {
      school_uuid: localStorage.getItem("school_uuid"),
    }
    let response = await serviceAxiosInstance({
      url: "/get-all-class",
      method: "POST",
      data: payload,
    });
    if(response.status)
    {
      setClassList(response.data?.data);
    }
  }
  const getStudentDetail = () => {};
  useEffect(() => {
    getClassList();
    if (formType?.status === "EDIT") {
      const data = formType?.data?.data;
      const tempStudentData = {
        studentImage: null,
        schoolUuid: "",
        studentName: data?.student_name,
        studentPassword: "",
        studentEmail: data?.student_email,
        studentDob: data?.student_dob,
        studentPhone: data?.student_mobile,
        studentAddress: data?.student_address,
        parent1Name: data?.parent_name,
        parent1Relationship: data?.parent_relationship,
        parent1Email: data?.parent_email,
        parent1Phone: data?.parent_mobile,
        role: "STUDENT",
      };
      setStudentData(tempStudentData);
      getStudentDetail(formType?.data);
    }
  }, [formType]);
  return (
    <>
      <div className="mainContainer">
        <div className="mainMiddleContainer">
          <div className="middleContainer">
            <Box display="flex" alignItems="center" gap="16px">
              <Box
                onClick={() => window.location.reload()}
                sx={{
                  background: "white",
                  padding: "2px 4px",
                  borderRadius: "4px",
                  border: "1px solid rgba(0,0,0,0.225)",
                }}
              >
                <BackIcon fontSize="large" />
              </Box>
              <TopBar
                title={`${
                  formType?.status === "EDIT" ? "Edit" : "Add New"
                } Student`}
              />
            </Box>
            <form autoComplete="off">
              <div className="personalDetail">
                <div className="personalDetailHeader commonFormHeader">
                  <p>Student Details</p>
                </div>
                <div className="personalDetailsForm">
                  <div className="pdfLeftDiv studentForm">
                    <label htmlFor="photo">Photo *</label>
                    <textarea
                      type="text"
                      id="photo"
                      name="photo"
                      rows="7"
                      value="Drag and drop or 
                      click here to select file"
                      disabled
                    />
                  </div>
                  <div className="pdfMiddleDiv commonFormDiv">
                    <label htmlFor="studentName">Name *</label>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      value={studentData.studentName}
                      onChange={handleChange}
                      autoComplete="new-studentName"
                    />
                    <label htmlFor="studentDob">Date of Birth *</label>
                    <input
                      type="date"
                      id="studentDob"
                      name="studentDob"
                      value={studentData.studentDob}
                      onChange={handleChange}
                      autoComplete="new-studentDob"
                    />
                    {formType?.status !== "EDIT" ? (
                      <>
                        <label htmlFor="studentEmail">Email *</label>
                        <input
                          type="email"
                          id="studentEmail"
                          name="studentEmail"
                          value={studentData.studentEmail}
                          onChange={handleChange}
                          autoComplete="new-studentEmail"
                        />
                      </>
                    ) : null}
                    <label htmlFor="studentAddress">Address *</label>
                    <textarea
                      type="text"
                      id="studentAddress"
                      name="studentAddress"
                      rows="7"
                      cols="50"
                      value={studentData.studentAddress}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="pdfRightDiv commonFormDiv">
                    <label htmlFor="studentPhone">Phone *</label>
                    <input
                      type="text"
                      id="studentPhone"
                      name="studentPhone"
                      value={studentData.studentPhone}
                      onChange={handleChange}
                      autoComplete="new-studentPhone"
                    />
                    <label htmlFor="parent1Name">Parent Name *</label>
                    <input
                      type="text"
                      id="parent1Name"
                      name="parent1Name"
                      value={studentData.parent1Name}
                      onChange={handleChange}
                      autoComplete="new-parent1Name"
                    />
                     <div>
                  <label htmlFor="studentAddress">Select class *</label>
                 
                  <select className="selectClass">
                    <option value="">Select</option>
                    {
                    classList?.map(item=>{
                      return <option value="first">{item.class_name} &nbsp;&nbsp;({item?.abbreviation})</option>
                    })
                  }
                    
                  </select>
                  </div>
                    {formType?.status !== "EDIT" ? (
                      <>
                        <label htmlFor="studentPassword">Password *</label>
                        <input
                          type="text"
                          id="studentPassword"
                          name="studentPassword"
                          value={studentData.studentPassword}
                          onChange={handleChange}
                          autoComplete="new-studentPassword"
                        />
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="education">
                <div className="commonFormHeader">
                  <p>Guardian Details</p>
                </div>
                <div className="personalDetailsForm">
                  <div className="pdfLeftDiv commonFormDiv">
                    <label htmlFor="parent1Name">Guardian 1 Name *</label>
                    <input
                      type="text"
                      id="parent1Name"
                      name="parent1Name"
                      value={studentData.parent1Name}
                      onChange={handleChange}
                      autoComplete="new-parent1Name"
                    />
                    <label htmlFor="parent1Email">Email *</label>
                    <input
                      type="email"
                      id="parent1Email"
                      name="parent1Email"
                      value={studentData.parent1Email}
                      onChange={handleChange}
                      autoComplete="new-parent1Email"
                    />
                  </div>
                  <div className="pdfRightDiv commonFormDiv">
                    <label htmlFor="parent1Relationship">Relationship *</label>
                    <input
                      type="text"
                      id="parent1Relationship"
                      name="parent1Relationship"
                      value={studentData.parent1Relationship}
                      onChange={handleChange}
                      autoComplete="new-parent1Relationship"
                    />
                    <label htmlFor="parent1Phone">Phone *</label>
                    <input
                      type="text"
                      id="parent1Phone"
                      name="parent1Phone"
                      value={studentData.parent1Phone}
                      onChange={handleChange}
                      autoComplete="new-parent1Phone"
                    />
                  </div>
                </div>
              </div>
              <div className="submitFormButton">
                {formType?.status === "EDIT" ? (
                  <input
                    type="button"
                    id="submit"
                    name="submit"
                    value="Save"
                    className="submitButton"
                    onClick={handleStudentEdit}
                  />
                ) : (
                  <input
                    type="button"
                    id="submit"
                    name="submit"
                    value="Submit"
                    className="submitButton"
                    onClick={handleStudentForm}
                  />
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      {openToaster && (
        <ToasterSnackbar
          status={alertStatus}
          openToaster={openToaster}
          message={"Message for Toast"}
          setOpenToaster={setOpenToaster}
          alertStatus={alertStatus}
          setAlertStatus={setAlertStatus}
        />
      )}
    </>
  );
}
