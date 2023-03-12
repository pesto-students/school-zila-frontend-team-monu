import React from "react";
import Footer from "../../Common/Footer/Footer";
import SideBar from "../../Common/SideBar/SideBar";
import TopBar from "../../Common/TopBar/TopBar";
import ColorButtons from "../../Button";
import "./AddNewStudent.css";

export default function AddNewStudent() {
  return (
    <>
      <div className="mainContainer">
        <SideBar />
        <div className="mainMiddleContainer">
          <div className="middleContainer">
            <TopBar title="Add New Student" />
            <form>
              <div className="personalDetail">
                <div className="personalDetailHeader commonFormHeader">
                  <p>Student Details</p>
                </div>
                <div className="personalDetailsForm">
                  <div className="pdfLeftDiv studentForm">
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
                  </div>
                  <div className="pdfMiddleDiv commonFormDiv">
                    <label for="fname">First Name *</label>
                    <input type="text" id="fname" name="fname" />
                    <label for="fname">Date of Birth *</label>
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
                  </div>
                  <div className="pdfRightDiv commonFormDiv">
                    <label for="fname">Last Name *</label>
                    <input type="text" id="fname" name="fname" />
                    <label for="fname">Parent Name *</label>
                    <input type="text" id="fname" name="fname" />
                    <label for="fname">Phone *</label>
                    <input type="text" id="fname" name="fname" />
                  </div>
                </div>
              </div>
              <div className="education">
                <div className="commonFormHeader">
                  <p>Guardian Details</p>
                </div>
                <div className="personalDetailsForm">
                  <div className="pdfLeftDiv commonFormDiv">
                    <label for="fname">Guardian 1 Name *</label>
                    <input type="text" id="fname" name="fname" />
                    <label for="fname">Email *</label>
                    <input type="text" id="fname" name="fname" />
                    <label for="fname">Guardian 2 Name *</label>
                    <input type="text" id="fname" name="fname" />
                    <label for="fname">Email *</label>
                    <input type="text" id="fname" name="fname" />
                  </div>
                  <div className="pdfRightDiv commonFormDiv">
                    <label htmlFor="fname">Relationship *</label>
                    <input type="text" id="fname" name="fname" />
                    <label for="fname">Phone *</label>
                    <input type="text" id="fname" name="fname" />
                    <label htmlFor="fname">Relationship *</label>
                    <input type="text" id="fname" name="fname" />
                    <label for="fname">Phone *</label>
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
