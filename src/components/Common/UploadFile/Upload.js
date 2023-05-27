import React, { useState } from "react";
import UploadIcon from "../../../assets/upload-file.png";
import serviceAxiosInstance from "../../../service/axiosService";
import ToasterSnackbar from "../../Common/Toaster/toasterAlerts";
import { TOASTER_STATUS } from "../../../../src/utils/constants";
import { updateTosterStatus } from "../../../utils/commonService";
import "./Upload.css";

const dummyUpload = {
  topicName: "",
  lectureUrl: "",
  lectureDetail: "",
  teacherName: "",
  rating: "",
  lecGrade: null,
};
const dummyAssignment = {
  topicName: "",
  assignmentUrl: "",
  assignmentDetail: "",
  teacherName: "",
  rating: "",
  assignmentGrade: null,
};

let snackBarMessage = "";
export default function UploadFile() {
  const [openToaster, setOpenToaster] = useState(false);
  const [alertStatus, setAlertStatus] = useState(null);
  const [uploadLecture, setUploadLecture] = useState(dummyUpload);
  const [uploadAssignment, setUploadAssignment] = useState(dummyAssignment);

  const handleLectureChange = (event) => {
    event.preventDefault();
    const { name, value } = event?.target;
    setUploadLecture({ ...uploadLecture, [name]: value });
  };

  const handleAssignmentChange = (event) => {
    event.preventDefault();
    const { name, value } = event?.target;
    setUploadAssignment({ ...uploadAssignment, [name]: value });
  };

  const handleUploadLecture = async () => {
    try {
      let response = await serviceAxiosInstance({
        // url of the api endpoint (can be changed)
        url: "uploadLecture/",
        method: "POST",
        data: uploadLecture,
      });
      if (response?.status) {
        snackBarMessage = response?.message;
        updateTosterStatus(
          setOpenToaster,
          setAlertStatus,
          TOASTER_STATUS.SUCCESS
        );
        setAddNewBtnClick(false);
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

  const handleUploadAssignment = async () => {
    try {
      let response = await serviceAxiosInstance({
        // url of the api endpoint (can be changed)
        url: "uploadAssignment/",
        method: "POST",
        data: uploadAssignment,
      });
      if (response?.status) {
        snackBarMessage = response?.message;
        updateTosterStatus(
          setOpenToaster,
          setAlertStatus,
          TOASTER_STATUS.SUCCESS
        );
        setAddNewBtnClick(false);
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

  const uploadFile = () => {
    handleUploadLecture();
    handleUploadAssignment();
  };

  const stdOptions = [1,2,3,4,5,6,7,8,9,10,11,12];

  return (
    <>
      <div className="upload-container">
        <div className="upload-lectures">
          <img src={UploadIcon} alt="upload lecture image" />
          <p className="upload-title">Upload Lecture</p>
          <div class="file-input">
            <input
              type="file"
              id="file"
              class="file"
              name="lectureUrl"
              onChange={handleLectureChange}
            />
            <label for="file">
              Upload
              <p class="file-name"></p>
            </label>
          </div>
          <label for="lecStandard" className="topicLabel">
            Grade:
          </label>
          <select name="lecGrade" id="lecGrade">
            {stdOptions.map((g) =>(<option value={g}>{g}</option>))}
          </select>
          <label for="topicName" className="topicLabel">
            Topic title:
          </label>
          <input
            className="lectureInput"
            type="text"
            name="topicName"
            value={uploadLecture.topicName}
            onChange={handleLectureChange}
          />
          <br />
          <label for="lectureDetail" className="topicLabel">
            Description:
          </label>
          <textarea
            className="lectureInput"
            type="text"
            name="lectureDetail"
            rows="4"
            value={uploadLecture.lectureDetail}
            onChange={handleLectureChange}
          />
        </div>
        <div className="upload-assignment">
          <img src={UploadIcon} alt="upload lecture image" />
          <p className="upload-title">Upload Assignment</p>
          <div class="file-input">
            <input type="file" id="file" class="file" name="" />
            <label for="file">
              Upload
              <p class="file-name"></p>
            </label>
          </div>
          <label for="assignmentStandard" className="topicLabel">
            Grade:
          </label>
          <select name="assignmentGrade" id="assignmentGrade">
            {stdOptions.map((g) =>(<option value={g}>{g}</option>))}
          </select>
          <label for="topicName" className="topicLabel">
            Topic title:
          </label>
          <input
            type="text"
            name="topicName"
            value={uploadAssignment.topicName}
            onChange={handleAssignmentChange}
          />{" "}
          <br />
          <label for="assignmentDetail" className="topicLabel">
            Description:
          </label>
          <textarea
            className="lectureInput"
            type="text"
            name="assignmentDetail"
            rows="4"
            value={uploadAssignment.assignmentDetail}
            onChange={handleAssignmentChange}
          />
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
      </div>
      <button
        type="button"
        id="submitButton"
        value={uploadLecture.topicName}
        onClick={uploadFile}
      >
        Submit
      </button>
    </>
  );
}
