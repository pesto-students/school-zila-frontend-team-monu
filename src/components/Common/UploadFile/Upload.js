import React from "react";
import UploadIcon from "../../../assets/upload-file.png";
import "./Upload.css";

export default function UploadFile() {
  return (
    <div className="upload-container">
      <div className="upload-lectures">
        <img src={UploadIcon} alt="upload lecture image" />
        <p className="upload-title">Upload Lecture</p>
        <p className="upload-breif-detail">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
          aperiam.
        </p>
        <div class="file-input">
          <input type="file" id="file" class="file" />
          <label for="file">
            Upload
            <p class="file-name"></p>
          </label>
        </div>
      </div>
      <div className="upload-assignment">
        <img src={UploadIcon} alt="upload lecture image" />
        <p className="upload-title">Upload Assignment</p>
        <p className="upload-breif-detail">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
          aperiam.
        </p>
        <div class="file-input">
          <input type="file" id="file" class="file" />
          <label for="file">
            Upload
            <p class="file-name"></p>
          </label>
        </div>
      </div>
    </div>
  );
}
