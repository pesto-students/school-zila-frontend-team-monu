import React, {useEffect, useState} from "react";
import TopBar from "../../Common/TopBar/TopBar";
// import NewEntityButton from "../../Button";
import NewEntityButton from "../../Common/NewEntityButton";

import serviceAxiosInstance from "../../../service/axiosService";
import ToasterSnackbar from "../../Common/Toaster/toasterAlerts";
import { TOASTER_STATUS } from "../../../../src/utils/constants";
import { updateTosterStatus } from '../../../utils/commonService';
import "./AddNewStudent.css";

let snackBarMessage = "";
const initialStudentData = {
  studentImage: null,
  schoolUuid:"",
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
  parent2Name: "",
  parent2Relationship: "",
  parent2Email: "",
  parent2Phone: "",
  role: "",
};

export default function AddNewStudent({setAddNewBtnClick,formType}) {
  const [openToaster, setOpenToaster] = useState(false);
  const [alertStatus, setAlertStatus] = useState(null);

  const [studentData, setStudentData] = useState(initialStudentData);
  const handleStudentForm = async () => {
    try {
      let response = await serviceAxiosInstance({
        // url of the api endpoint (can be changed)
        url: "addStudent/",
        method: "POST",
        data: studentData,
      });
      if (response?.status) {
        snackBarMessage = response?.message;
        updateTosterStatus(setOpenToaster, setAlertStatus, TOASTER_STATUS.SUCCESS);
        setAddNewBtnClick(false);
      } else {
        snackBarMessage = response?.message;
        updateTosterStatus(setOpenToaster, setAlertStatus, TOASTER_STATUS.ERROR);
      }
    } catch (e) {
      snackBarMessage = response?.message;
      updateTosterStatus(setOpenToaster, setAlertStatus, TOASTER_STATUS.ERROR);
      console.log("Error");
    }
  };

  const handleStudentEdit = async() => {
    try
    {
      let response = await serviceAxiosInstance({
        url: "/edit-student",
        method: "POST",
        data: studentData,
      });
    }
    catch(err)
    {

    }
  }
  const handleChange = (event) => {
    event.preventDefault();
    const {name, value} = event?.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const getStudentDetail = () => {
      
  }
  useEffect(()=>{
    if(formType?.status === "EDIT")
    {
      const data = formType?.data?.data;
      const tempStudentData = {
        studentImage: null,
        schoolUuid:"",
        studentName: data?.student_name,
        studentPassword: "",
        studentEmail:  data?.student_email,
        studentDob: data?.student_dob,
        studentPhone: data?.student_mobile,
        studentAddress: data?.student_address,
        parent1Name: data?.parent_name,
        parent1Relationship: data?.parent_relationship,
        parent1Email: data?.parent_email,
        parent1Phone: data?.parent_mobile,
        role: "STUDENT",
      };
      setStudentData(tempStudentData)
      getStudentDetail(formType?.data);
    }
  },[formType])
  return (
    <>
      <div className="mainContainer">
        <div className="mainMiddleContainer">
          <div className="middleContainer">
            <TopBar title={`${formType?.status === "EDIT"?"Edit":"Add New"} Student`} />
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
                    <input type="text" id="studentName" name="studentName" value={studentData.studentName} onChange={handleChange} autoComplete="new-studentName" />
                    <label htmlFor="studentDob">Date of Birth *</label>
                    <input type="date" id="studentDob" name="studentDob" value={studentData.studentDob} onChange={handleChange} autoComplete="new-studentDob" />
                    <label htmlFor="studentEmail">Email *</label>
                    <input type="email" id="studentEmail" name="studentEmail" value={studentData.studentEmail} onChange={handleChange} autoComplete="new-studentEmail" />
                    <label htmlFor="studentAddress">Address *</label>
                    <textarea
                      type="text"
                      id="studentAddress"
                      name="studentAddress"
                      rows="7"
                      cols="50" value={studentData.studentAddress} onChange={handleChange}
                    />
                  </div>
                  <div className="pdfRightDiv commonFormDiv">
                    <label htmlFor="studentPhone">Phone *</label>
                    <input type="text" id="studentPhone" name="studentPhone" value={studentData.studentPhone} onChange={handleChange} autoComplete="new-studentPhone" />
                    <label htmlFor="parent1Name">Parent Name *</label>
                    <input type="text" id="parent1Name" name="parent1Name" value={studentData.parent1Name} onChange={handleChange} autoComplete="new-parent1Name" />
                    {
                      formType?.status !== "EDIT" ? 
                      <>
                      <label htmlFor="studentPassword">Password *</label>
                      <input type="text" id="studentPassword" name="studentPassword" value={studentData.studentPassword} onChange={handleChange} autoComplete="new-studentPassword" />
                      </>
                      :null
                    }
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
                    <input type="text" id="parent1Name" name="parent1Name" value={studentData.parent1Name} onChange={handleChange} autoComplete="new-parent1Name" />
                    <label htmlFor="parent1Email">Email *</label>
                    <input type="email" id="parent1Email" name="parent1Email" value={studentData.parent1Email} onChange={handleChange} autoComplete="new-parent1Email" />
                    <label htmlFor="parent2Name">Guardian 2 Name *</label>
                    <input type="text" id="parent2Name" name="parent2Name" value={studentData.parent2Name} onChange={handleChange} autoComplete="new-parent2Name" />
                    <label htmlFor="parent2Email">Email *</label>
                    <input type="email" id="parent2Email" name="parent2Email" value={studentData.parent2Email} onChange={handleChange} autoComplete="new-parent2Email" />
                  </div>
                  <div className="pdfRightDiv commonFormDiv">
                    <label htmlFor="parent1Relationship">Relationship *</label>
                    <input type="text" id="parent1Relationship" name="parent1Relationship" value={studentData.parent1Relationship} onChange={handleChange} autoComplete="new-parent1Relationship" />
                    <label htmlFor="parent1Phone">Phone *</label>
                    <input type="text" id="parent1Phone" name="parent1Phone" value={studentData.parent1Phone} onChange={handleChange} autoComplete="new-parent1Phone" />
                    <label htmlFor="parent2Relationship">Relationship *</label>
                    <input type="text" id="parent2Relationship" name="parent2Relationship" value={studentData.parent2Relationship} onChange={handleChange} autoComplete="new-parent2Relationship" />
                    <label htmlFor="parent2Phone">Phone *</label>
                    <input type="text" id="parent2Phone" name="parent2Phone" value={studentData.parent2Phone} onChange={handleChange} autoComplete="new-parent2Phone" />
                  </div>
                </div>
              </div>
              <div className="submitFormButton">
                {
                  formType?.status === "EDIT"?
                  <input
                  type="button"
                  id="submit"
                  name="submit"
                  value="Save"
                  className="submitButton"
                  onClick={handleStudentEdit}
                />
                  :
                <input
                  type="button"
                  id="submit"
                  name="submit"
                  value="Submit"
                  className="submitButton"
                  onClick={handleStudentForm}
                />
                }
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
