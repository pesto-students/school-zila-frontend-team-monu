import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignupPageImage from "../../../assets/Login-page-image.png";
import serviceAxiosInstance from "../../../service/axiosService";
import ToasterSnackbar from "../../Common/Toaster/toasterAlerts";
import { TOASTER_STATUS } from "../../../../src/utils/constants";
import { updateTosterStatus } from "../../../utils/commonService";
import "./SignUpPage.css";
import ROLES from "../../../constant/roles";

let snackBarMessage = "";
const initialSignupState = {
  schoolName: "",
  schoolMoto:"",
  email: "",
  password: "",
  confirmPass: "",
  mobileNo: "",
  location:"",
};

export default function SignUpPage() {
  const [openToaster, setOpenToaster] = useState(false);
  const [alertStatus, setAlertStatus] = useState(null);
  const [erroMsg,setErrorMsg] = useState("");
  const [signupData, setSignupData] = useState(initialSignupState);
  const handleLogin = async (e) => {
    e?.preventDefault();
    let payload =  {
      "school_name": signupData?.schoolName,
      "school_moto": signupData?.schoolMoto,
      // "school_imgs": "img-1.png",
      "school_mobile": signupData?.mobileNo,
      "school_location":signupData?.location,
      "school_email": signupData?.email,
      "school_password": signupData?.password,
      "role": "SCHOOL"
   }
    try {
      let response = await serviceAxiosInstance({
        // url of the api endpoint (can be changed)
        url: "/signup",
        method: "POST",
        data: payload,
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
    } catch (error) {
      snackBarMessage = error?.response?.data?.message || error?.response?.data?.toString() || error?.response?.toString();
      setErrorMsg(snackBarMessage);
      updateTosterStatus(setOpenToaster, setAlertStatus, TOASTER_STATUS.ERROR);
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
            <label htmlFor="schoolname">School Name *</label>
              <input
                type="text"
                id="schoolname"
                name="schoolName"
                value={signupData?.schoolName || ""}
                onChange={handleChange}
                autoComplete="new-schoolname"
              />

            <label htmlFor="schoolmoto">School Moto *</label>
              <input
                type="text"
                id="schoolmoto"
                name="schoolMoto"
                value={signupData?.schoolMoto || ""}
                onChange={handleChange}
                autoComplete="new-schoolMoto"
              />

              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={signupData?.email || ""}
                onChange={handleChange}
                autoComplete="new-email"
              />
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                id="password"
                name="password"
                value={signupData?.password || ""}
                onChange={handleChange}
                autoComplete="new-password"
              />
              <label htmlFor="password">Confirm Password *</label>
              <input
                type="password"
                id="confPassword"
                name="confirmPass"
                value={signupData?.confirmPass || ""}
                onChange={handleChange}
                autoComplete="new-confPassword"
              />

              <label htmlFor="mobno">Mobile No *</label>
              <input
                type="text"
                id="mobileno"
                name="mobileNo"
                value={signupData?.mobileNo || ""}
                onChange={handleChange}
                autoComplete="new-mobileno"
              />

              <label htmlFor="mobno">Address *</label>
              <input
                type="text"
                id="location"
                name="location"
                value={signupData?.location || ""}
                onChange={handleChange}
                autoComplete="new-location"
              />

                <div className="submitFormBtn">
                  <input
                    type="submit"
                    id="submit"
                    name="submit"
                    className="formSubmitBtn"
                    onClick={handleLogin}
                  />
                </div>
            </div>
          </form>
        </div>
      </div>
      {openToaster && (
        <ToasterSnackbar
          status={alertStatus}
          openToaster={openToaster}
          message={erroMsg}
          setOpenToaster={setOpenToaster}
          alertStatus={alertStatus}
          setAlertStatus={setAlertStatus}
        />
      )}
    </>
  );
}
