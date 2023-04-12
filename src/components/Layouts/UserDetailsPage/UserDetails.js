import React, {useState, useEffect} from "react";
import Footer from "../../Common/Footer/Footer";
import SideBar from "../../Common/SideBar/SideBar";
import TopBar from "../../Common/TopBar/TopBar";
import TempUserProfileAvatar from "../../../assets/tempTeacherPic.jpg";
import UserCoverDP from "../../../assets/cover1.png";
import LocationIcon from "../../../assets/Location-icon.svg";
import ContactIcon from "../../../assets/Call-icon.svg";
import EmailIcon from "../../../assets/Email-icon.svg";
import "./UserDetails.css";

let defaultUser = {
  userName: 'Vishal',
  userPhone: '9876543210',
  userEmail:'vishal@gmail.com',
  userCity: 'Mumbai',
  userCountry: 'India',
  role:'Admin',

}

export default function UserDetails({setShowSideBar}) {
  const [userData, setuserData] = useState(defaultUser);

  useEffect(() => {
    setShowSideBar(true);
    handleGetUserDetails();
  },[])


  const handleGetUserDetails = async () => {
    try {
      let payload = {
        schoolId: '',
        userId: '',
      }
      let response = await serviceAxiosInstance({
        // url of the api endpoint (can be changed)
        url: "user/",
        method: "POST",
        data: payload,
      });
      if (response?.status) {
        setuserData(response.data);
      }
    } catch (e) {
      console.log("Error");
    }
  };

  return (
    <>
      <div className="mainContainer">
        <SideBar />
        <div className="mainMiddleContainer">
          <div className="middleContainer">
            <TopBar title="User Details" />
            <div className="userDetailCard">
              <img
                src={TempUserProfileAvatar}
                alt="User Avatar"
                className="userAvatar"
              />
              <img
                src={UserCoverDP}
                alt="Cover DP of User"
                className="userCoverDP"
              />
              <div className="userDetail">
                <p className="userName">{userData.userName}</p>
                <div className="otherDetail">
                  <div className="userlocation">
                    <p className="userDetailText1">{userData.role}</p>
                    <div className="location">
                      <img src={LocationIcon} alt="User Location" />
                      <p className="userDetailText2">{userData.userCity+', '+userData.userCountry}</p>
                    </div>
                  </div>
                  <div className="userContact">
                    <p className="userDetailText2">Phone</p>
                    <div className="contact">
                      <div className="contactIcon">
                        <img src={ContactIcon} alt="User Contact" />
                      </div>
                      <p className="userDetailText1">{userData.userPhone}</p>
                    </div>
                  </div>
                  <div className="userEmail">
                    <p className="userDetailText2">Email</p>
                    <div className="email">
                      <div className="emailIcon">
                        <img src={EmailIcon} alt="User Email Address" />
                      </div>
                      <p className="userDetailText1">{userData.userEmail}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="userDetailField">
              <form action="">
                <div className="userDetailForm">
                  <div>
                    <label htmlFor="fname">Parent Name</label>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      disabled
                      value="saurabh"
                    />
                  </div>
                  <div>
                    <label htmlFor="userPhone">Phone No</label>
                    <input type="text" id="userPhone" name="userPhone" disabled />
                  </div>
                  <div>
                    <label htmlFor="userEmail">Email</label>
                    <input type="text" id="userEmail" name="userEmail" disabled />
                  </div>
                  <div>
                    <label htmlFor="userPassword">Password</label>
                    <input type="text" id="userPassword" name="userPassword" disabled />
                  </div>
                  <a href="http://localhost:3000">Change Password</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
