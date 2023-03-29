import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginPageImage from "../../../assets/Login-page-image.png";
import Footer from "../../Common/Footer/Footer";
import serviceAxiosInstance from "../../../service/axiosService";
import ToasterSnackbar from "../../Common/Toaster/toasterAlerts";
import { toasterStatus } from "../../../../src/utils/constants";
import "./LoginPage.css";

let snackBarMessage = "";
const initialLoginState = {
  email: "",
  password: "",
  role: "",
};

export default function LoginPage() {
  const [openToaster, setOpenToaster] = useState(false);
  const [alertStatus, setAlertStatus] = useState(null);

  const [loginData, setLoginData] = useState(initialLoginState);
  const handleLogin = async () => {
    try { debugger
      let response = await serviceAxiosInstance({
        // url of the api endpoint (can be changed)
        url: "login/",
        method: "POST",
        data: loginData,
      });
      if (response?.status) {
        snackBarMessage = response?.message;
        updateTosterStatus(setOpenToaster, setAlertStatus, toasterStatus.SUCCESS);
      } else {
        snackBarMessage = response?.message;
        updateTosterStatus(setOpenToaster, setAlertStatus, toasterStatus.ERROR);
      }
    } catch (e) {
      snackBarMessage = response?.message;
      updateTosterStatus(setOpenToaster, setAlertStatus, toasterStatus.ERROR);
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
          <form action="" method="post">
            <div className="loginForm">
              <label htmlFor="email">Email *</label>
              <input
                type="text"
                id="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
              />
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
              />
              <label htmlFor="role">Role *</label>
              <input
                type="text"
                id="role"
                name="role"
                value={loginData.role}
                onChange={handleChange}
              />
              <Link to="/student">
                <div className="submitFormBtn">
                  <input
                    type="submit"
                    value="Submit"
                    className="formSubmitBtn"
                    onClick={handleLogin}
                  />
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
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
