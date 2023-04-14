import React, { useState, useEffect, useContext } from "react";
import { TokenContext } from "../../../contextApi";
import { Link } from "react-router-dom";
import LoginPageImage from "../../../assets/Login-page-image.png";
import serviceAxiosInstance from "../../../service/axiosService";
import ToasterSnackbar from "../../Common/Toaster/toasterAlerts";
import { TOASTER_STATUS } from "../../../../src/utils/constants";
import { updateTosterStatus } from '../../../utils/commonService';
import "./LoginPage.css";

let snackBarMessage = "";
const initialLoginState = {
  email: "",
  password: "",
  role: "",
};

export default function LoginPage({setShowSideBar}) {
  useEffect(()=> {
    setShowSideBar(false);
  },[]);

  const tokenContext = useContext(TokenContext);
  const [openToaster, setOpenToaster] = useState(false);
  const [alertStatus, setAlertStatus] = useState(null);

  const [loginData, setLoginData] = useState(initialLoginState);
  const handleLogin = async () => {
    try {
      let response = await serviceAxiosInstance({
        // url of the api endpoint (can be changed)
        url: "login/",
        method: "POST",
        data: loginData,
      });
      tokenContext.setToken(response.data.token)
      
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
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    const {name, value} = event?.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <>
      <div className="loginPageContainer">
        <div className="leftContainer">
          <img src={LoginPageImage} alt="Login Page Image" />
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
          <p className="loginTitle">LOGIN</p>
          <form autoComplete="off">
            <div className="loginForm">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                autoComplete="new-email"
              />
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                autoComplete="new-password"
              />
              <label htmlFor="role">Role *</label>
              <input
                type="text"
                id="role"
                name="role"
                value={loginData.role}
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
