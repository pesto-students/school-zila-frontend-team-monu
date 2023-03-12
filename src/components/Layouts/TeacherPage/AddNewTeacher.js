import React from "react";
import SideBar from "../../Common/SideBar/SideBar";
import TopBar from "../../Common/TopBar/TopBar";
import Footer from "../../Common/Footer/Footer";
import ColorButtons from "../../Button";
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
                    <label for="fname">First Name *</label>
                    <input type="text" id="fname" name="fname" />
                    <label for="fname">Email *</label>
                    <input type="text" id="fname" name="fname" />
                    <label for="fname">Address *</label>
                    <textarea
                      type="text"
                      id="fname"
                      name="fname"
                      rows="7"
                      cols="50"
                    />
                    <label for="fname">Date of Birth *</label>
                    <input type="text" id="fname" name="fname" />
                  </div>
                  <div className="pdfRightDiv commonFormDiv">
                    <label for="fname">Last Name *</label>
                    <input type="text" id="fname" name="fname" />
                    <label for="fname">Phone *</label>
                    <input type="text" id="fname" name="fname" />
                    <label for="fname">Photo *</label>
                    <textarea
                      type="text"
                      id="fname"
                      name="fname"
                      rows="7"
                      value="Drag and drop or 
                      click here to select file"
                      disabled
                    />
                    <label for="fname">Specialization *</label>
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
                    <label for="fname">University *</label>
                    <input type="text" id="fname" name="fname" />
                    <label for="fname">Start & End Date *</label>
                    <input type="text" id="fname" name="fname" />
                  </div>
                  <div className="pdfRightDiv commonFormDiv">
                    <label for="fname">Degree *</label>
                    <input type="text" id="fname" name="fname" />
                    <label for="fname">City *</label>
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
