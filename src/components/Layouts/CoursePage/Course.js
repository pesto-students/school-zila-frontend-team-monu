import React, { useState, useEffect } from "react";
import AnalysisLecture from "./AnalysisLecture";
import TopBar from "../../Common/TopBar/TopBar";
import SubjectCard from "../../Common/CoursesUtil/SubjectCard";
import StudentAssignment from "../../Common/CoursesUtil/StudentAssignment";
import UploadFile from "../../Common/UploadFile/Upload";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./Course.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Course({ setShowSideBar }) {
  useEffect(() => {
    setShowSideBar(true);
  }, []);

  const [courseData, setCourseData] = useState([]);
  const [openLecture, setOpenLecture] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    handleGetCoursesDetails();
  }, []);

  const handleGetCoursesDetails = async () => {
    try {
      let payload = {
        courseId: "",
        schoolId: "",
      };
      let response = await serviceAxiosInstance({
        // url of the api endpoint (can be changed)
        url: "student/",
        method: "POST",
        data: payload,
      });
      if (response?.status) {
        setCourseData(response.data);
      }
    } catch (e) {
      console.log("Error");
    }
  };

  return (
    <>
      {openLecture ? (
        <AnalysisLecture setOpenLecture={setOpenLecture} />
      ) : (
        <div className="mainContainer">
          <div className="mainMiddleContainer">
            <div className="middleContainer">
              <TopBar title="Courses" />
              <div className="subjects">
                <div className="subjectHeader">
                  <p>Topics</p>
                  <div className="subjectTab">
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                    >
                      <Tab label="Recordings" {...a11yProps(0)} />
                      <Tab label="Assignments" {...a11yProps(1)} />
                      <Tab label="Upload" {...a11yProps(2)} />
                    </Tabs>
                  </div>
                </div>
                <TabPanel value={value} index={0}>
                  <div className="subjectDetails">
                    <SubjectCard setOpenLecture={setOpenLecture} />
                    <SubjectCard setOpenLecture={setOpenLecture} />
                    <SubjectCard setOpenLecture={setOpenLecture} />
                    <SubjectCard setOpenLecture={setOpenLecture} />
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <StudentAssignment />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <UploadFile />
                </TabPanel>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
