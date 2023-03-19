import React from "react";
import SideBar from "../../Common/SideBar/SideBar";
import TopBar from "../../Common/TopBar/TopBar";
import Footer from "../../Common/Footer/Footer";
import ColorButtons from "../../Common/Button";
import "./AddNewTeacher.css";

export default function AddNewTeacher() {
  return (
    <>
      <div className="mainContainer">
        <SideBar />
        <div className="mainMiddleContainer">
          <div className="middleContainer">
            <TopBar title="Add New Teacher" />
            <form>
              <div className="personalDetail">
                <div className="personalDetailHeader commonFormHeader">
                  <p>Personal Details</p>
                </div>
                <div className="personalDetailsForm">
                  <div className="pdfLeftDiv commonFormDiv">
                    <label htmlFor="fname">First Name *</label>
                    <input type="text" id="fname" name="fname" />
                    <label htmlFor="fname">Email *</label>
                    <input type="text" id="fname" name="fname" />
                    <label htmlFor="fname">Address *</label>
                    <textarea
                      type="text"
                      id="fname"
                      name="fname"
                      rows="7"
                      cols="50"
                    />
                    <label htmlFor="fname">Date of Birth *</label>
                    <input type="text" id="fname" name="fname" />
                  </div>
                  <div className="pdfRightDiv commonFormDiv">
                    <label htmlFor="fname">Last Name *</label>
                    <input type="text" id="fname" name="fname" />
                    <label htmlFor="fname">Phone *</label>
                    <input type="text" id="fname" name="fname" />
                    <label htmlFor="fname">Photo *</label>
                    <textarea
                      type="text"
                      id="fname"
                      name="fname"
                      rows="7"
                      value="Drag and drop or 
                      click here to select file"
                      disabled
                    />
                    <label htmlFor="fname">Specialization *</label>
                    <input type="text" id="fname" name="fname" />
                  </div>
                </div>
              </div>
              <div className="education">
                <div className="commonFormHeader">
                  <p>Education</p>
                </div>
                <div className="personalDetailsForm">
                  <div className="pdfLeftDiv commonFormDiv">
                    <label htmlFor="fname">University *</label>
                    <input type="text" id="fname" name="fname" />
                    <label htmlFor="fname">Start & End Date *</label>
                    <input type="text" id="fname" name="fname" />
                  </div>
                  <div className="pdfRightDiv commonFormDiv">
                    <label htmlFor="fname">Degree *</label>
                    <input type="text" id="fname" name="fname" />
                    <label htmlFor="fname">City *</label>
                    <input type="text" id="fname" name="fname" />
                  </div>
                </div>
              </div>
              <div className="submitFormButton">
                <ColorButtons parentClassName="submitButton">
                  Submit
                </ColorButtons>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
