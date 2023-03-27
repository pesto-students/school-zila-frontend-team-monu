import React from "react";
import LoginPageImage from "../../../assets/Login-page-image.png";
import Footer from "../../Common/Footer/Footer";
import "./LoginPage.css";

export default function LoginPage() {
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
              <label for="fname">Email *</label>
              <input type="text" id="fname" name="fname" />
              <label for="fname">Password *</label>
              <input type="text" id="fname" name="fname" />
              <label for="fname">Role *</label>
              <input type="text" id="fname" name="fname" />
              <div className="submitFormBtn">
                <input type="submit" value="Submit" className="formSubmitBtn" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
