import React, {useState} from "react";
import TopBar from "../../Common/TopBar/TopBar";

import serviceAxiosInstance from "../../../service/axiosService";
import ToasterSnackbar from "../../Common/Toaster/toasterAlerts";
import { TOASTER_STATUS } from "../../../../src/utils/constants";
import { updateTosterStatus } from '../../../utils/commonService';
import "./AddNewTeacher.css";

let snackBarMessage = "";
const initialTeacherData = {
  teacherName: "",
  teacherEmail: "",
  teacherPassword: "",
  teacherPhone:"",
  teacherAddress: "",
  teacherCity: "",
  teacherPhoto: null,
  teacherDob: "",
  teacherSpecialization: "",
  teacherUniversity: "",
  teacherDegree: "",
  teacherStartDate: "",
  teacherEndDate: "",
  schoolUuid:"",
  role:"",

};

export default function AddNewTeacher({setAddNewBtnClick}) {
  const [openToaster, setOpenToaster] = useState(false);
  const [alertStatus, setAlertStatus] = useState(null);

  const [teacherData, setTeacherData] = useState(initialTeacherData);
  const handleTeacherForm = async () => {
    try {
      let response = await serviceAxiosInstance({
        // url of the api endpoint (can be changed)
        url: "add-teacher/",
        method: "POST",
        data: teacherData,
      });
      if (response?.status) {
        snackBarMessage = response?.message;
        updateTosterStatus(setOpenToaster, setAlertStatus, TOASTER_STATUS.SUCCESS);
      } else {
        snackBarMessage = response?.message;
        updateTosterStatus(setOpenToaster, setAlertStatus, TOASTER_STATUS.ERROR);
      }
    } catch (e) {
      snackBarMessage = response?.message;
      updateTosterStatus(setOpenToaster, setAlertStatus, TOASTER_STATUS.ERROR);
      console.log("Error");
    };
    setAddNewBtnClick(false);
  };

  const handleChange = (event) => {
    event.preventDefault();
    const {name, value} = event?.target;
    setTeacherData({ ...teacherData, [name]: value });
  };

  return (
    <>
      <div className="mainContainer">
        <div className="mainMiddleContainer">
          <div className="middleContainer">
            <TopBar title="Add New Teacher" />
            <form autoComplete="off">
              <div className="personalDetail">
                <div className="personalDetailHeader commonFormHeader">
                  <p>Personal Details</p>
                </div>
                <div className="personalDetailsForm">
                  <div className="pdfLeftDiv commonFormDiv">
                    <label htmlFor="teacherName">Name *</label>
                    <input type="text" id="teacherName" name="teacherName" value={teacherData.teacherName} onChange={handleChange} autoComplete="new-teacherName" />
                    <label htmlFor="teacherEmail">Email *</label>
                    <input type="email" id="teacherEmail" name="teacherEmail" value={teacherData.teacherEmail} onChange={handleChange} autoComplete="new-teacherEmail" />
                    <label htmlFor="teacherAddress">Address *</label>
                    <textarea
                      type="text"
                      id="teacherAddress"
                      name="teacherAddress"
                      rows="7"
                      cols="50"
                      autoComplete="new-teacherAddress"
                    />
                    <label htmlFor="teacherDob">Date of Birth *</label>
                    <input type="date" id="teacherDob" name="teacherDob" value={teacherData.teacherDob} onChange={handleChange} autoComplete="new-teacherDob" />
                  </div>
                  <div className="pdfRightDiv commonFormDiv">
                    <label htmlFor="teacherPhone">Phone *</label>
                    <input type="text" id="teacherPhone" name="teacherPhone" value={teacherData.teacherPhoto} onChange={handleChange} autoComplete="new-teacherPhone" />
                      <label htmlFor="teacherSpecialization">Specialization *</label>
                      <input type="text" id="teacherSpecialization" name="teacherSpecialization" value={teacherData.teacherSpecialization} onChange={handleChange} autoComplete="new-teacherSpecialization" />
                    <label htmlFor="teacherPhoto">Photo *</label>
                    <textarea
                      type="text"
                      id="teacherPhoto"
                      name="teacherPhoto"
                      rows="7"
                      value="Drag and drop or 
                      click here to select file"
                      disabled
                    />
                    <label htmlFor="teacherPassword">Password *</label>
                    <input type="password" id="teacherPassword" name="teacherPassword" value={teacherData.teacherPassword} onChange={handleChange} autoComplete="new-teacherPassword" />
                  </div>
                </div>
              </div>
              <div className="education">
                <div className="commonFormHeader">
                  <p>Education</p>
                </div>
                <div className="personalDetailsForm">
                  <div className="pdfLeftDiv commonFormDiv">
                    <label htmlFor="teacherUniversity">University *</label>
                    <input type="text" id="teacherUniversity" name="teacherUniversity" value={teacherData.teacherUniversity} onChange={handleChange} autoComplete="new-teacherUniversity" />
                    <label htmlFor="teacherStartDate">Start & End Date *</label>
                    <input type="date" id="teacherStartDate" name="teacherStartDate" value={teacherData.teacherStartDate} onChange={handleChange} autoComplete="new-teacherStartDate" />
                    <input type="date" id="teacherEndDate" name="teacherEndDate" value={teacherData.teacherEndDate} onChange={handleChange} autoComplete="new-teacherEndDate" />
                  </div>
                  <div className="pdfRightDiv commonFormDiv">
                    <label htmlFor="teacherDegree">Degree *</label>
                    <input type="text" id="teacherDegree" name="teacherDegree" value={teacherData.teacherDegree} onChange={handleChange} autoComplete="new-teacherDegree" />
                    <label htmlFor="teacherCity">City *</label>
                    <input type="text" id="teacherCity" name="teacherCity" value={teacherData.teacherCity} onChange={handleChange} autoComplete="new-teacherCity" />
                  </div>
                </div>
              </div>
              <div className="submitFormButton">
                <input
                  type="submit"
                  id="submit"
                  name="Submit"
                  className="submitButton"
                  onClick={handleTeacherForm}
                  autoComplete="new-teacherCity"
                />
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
