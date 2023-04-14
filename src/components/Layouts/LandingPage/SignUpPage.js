import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignupPageImage from "../../../assets/Login-page-image.png";
import serviceAxiosInstance from "../../../service/axiosService";
import ToasterSnackbar from "../../Common/Toaster/toasterAlerts";
import { TOASTER_STATUS } from "../../../../src/utils/constants";
import { updateTosterStatus } from "../../../utils/commonService";
import "./SignUpPage.css";

let snackBarMessage = "";
const initialSignupState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPass: "",
  schoolName: "",
  mobileNo: "",
  role: "",
};

export default function SignUpPage() {
  const [openToaster, setOpenToaster] = useState(false);
  const [alertStatus, setAlertStatus] = useState(null);

  const [signupData, setSignupData] = useState(initialSignupState);
  const handleLogin = async () => {
    try {
      let response = await serviceAxiosInstance({
        // url of the api endpoint (can be changed)
        url: "signup/",
        method: "POST",
        data: signupData,
      });
      if (response?.status) {
        snackBarMessage = response?.message;
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

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event?.target;
    setSignupData({ ...signupData, [name]: value });
  };

  return (
    <>
      <div className="loginPageContainer">
        <div className="leftContainer">
          <img src={SignupPageImage} alt="Signup Page Image" />
          <div className="briefSchoolInfo">
            <p className="schoolName">Wizzkid Home School</p>
            <p className="schoolInfo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              commodi et! Corporis, adipisci? Eos omnis voluptas unde incidunt.
              Iste cum in voluptate nemo magni quis sit perspiciatis ullam
              facilis autem, aut blanditiis aperiam quos delectus quam eos
              corporis dignissimos assumenda maiores incidunt sapiente impedit.
              Maiores iure at inventore incidunt dignissimos.
            </p>
          </div>
        </div>
        <div className="rightContainer">
          <p className="loginTitle">SIGNUP</p>
          <form autoComplete="off">
            <div className="loginForm">
              <label htmlFor="firstname">First Name *</label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={signupData.firstName}
                onChange={handleChange}
                autoComplete="new-firstname"
              />
              <label htmlFor="lastname">Last Name *</label>
              <input
                type="text"
                id="lname"
                name="lname"
                value={signupData.lastName}
                onChange={handleChange}
                autoComplete="new-lastname"
              />

              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={signupData.email}
                onChange={handleChange}
                autoComplete="new-email"
              />
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                id="password"
                name="password"
                value={signupData.password}
                onChange={handleChange}
                autoComplete="new-password"
              />
              <label htmlFor="password">Confirm Password *</label>
              <input
                type="password"
                id="confPassword"
                name="confPassword"
                value={signupData.confirmPass}
                onChange={handleChange}
                autoComplete="new-confPassword"
              />

              <label htmlFor="schoolname">School Name *</label>
              <input
                type="text"
                id="schoolname"
                name="schoolname"
                value={signupData.schoolName}
                onChange={handleChange}
                autoComplete="new-schoolname"
              />
              <label htmlFor="mobno">Mobile No *</label>
              <input
                type="text"
                id="mobileno"
                name="mobileno"
                value={signupData.mobileNo}
                onChange={handleChange}
                autoComplete="new-mobileno"
              />

              <label htmlFor="role">Role *</label>
              <input
                type="text"
                id="role"
                name="role"
                value={signupData.role}
                onChange={handleChange}
                autoComplete="new-role"
              />
              <Link to="/student">
                <div className="submitFormBtn">
                  <input
                    type="submit"
                    id="submit"
                    name="submit"
                    className="formSubmitBtn"
                    onClick={handleLogin}
                  />
                </div>
              </Link>
            </div>
          </form>
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
