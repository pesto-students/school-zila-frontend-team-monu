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

const dummyCourses = [
  {
    topicName: "Subject 1",
    topicImage: "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?cs=srgb&dl=pexels-pixabay-301920.jpg&fm=jpg",
    teacherName: "Teacher Name",
    rating: "4.7",
    views: "1456",
  },
  {
    topicName: "Subject 2",
    topicImage: "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?cs=srgb&dl=pexels-pixabay-301920.jpg&fm=jpg",
    teacherName: "Teacher Name",
    rating: "4.9",
    views: "1456",
  },
  {
    topicName: "Subject 3",
    topicImage: "https://www.google.com/search?rlz=1C1ONGR_enIN957IN957&q=Discussion+images&stick=H4sIAAAAAAAAAONQF5LUr0jW18_VNzA2zChKtwKxstKNTBxS85SkYFIgAauUzOLk0uLizPw8oJyWXG5qSaKVfkVBYl5qDlBdfl5yakGJVXFmSmp5YmVxFG9OanJJaVGqQmZuYnrqIkYBkFlFqWmZeam5qXkl-ga_GMUCXP0DfFwVHH2C_RWCXR2DnD0U3PyDFrAwLGBhW8DCuoCFeQELyyJWQRe4zRDTim-xSTKUPLs26yl_z-I9b1XvXfbmqFj7IEB01pwJ5wB4Jsq_0wAAAA&sa=X&ved=2ahUKEwjV0vq86Kj-AhVUxTgGHaFsACIQs9oBKAB6BAgiEAI&biw=1366&bih=617&dpr=1#",
    teacherName: "Teacher Name",
    rating: "4.6",
    views: "1456",
  },
  {
    topicName: "Subject 4",
    topicImage: "https://www.google.com/search?rlz=1C1ONGR_enIN957IN957&q=Discussion+images&stick=H4sIAAAAAAAAAONQF5LUr0jW18_VNzA2zChKtwKxstKNTBxS85SkYFIgAauUzOLk0uLizPw8oJyWXG5qSaKVfkVBYl5qDlBdfl5yakGJVXFmSmp5YmVxFG9OanJJaVGqQmZuYnrqIkYBkFlFqWmZeam5qXkl-ga_GMUCXP0DfFwVHH2C_RWCXR2DnD0U3PyDFrAwLGBhW8DCuoCFeQELyyJWQRe4zRDTim-xSTKUPLs26yl_z-I9b1XvXfbmqFj7IEB01pwJ5wB4Jsq_0wAAAA&sa=X&ved=2ahUKEwjV0vq86Kj-AhVUxTgGHaFsACIQs9oBKAB6BAgiEAI&biw=1366&bih=617&dpr=1#",
    teacherName: "Teacher Name",
    rating: "4.7",
    views: "1456",
  },
]

export default function Course({setShowSideBar}) {
  useEffect(()=> {
    setShowSideBar(true);
    handleGetCoursesDetails();
  },[]);

  const [courseData, setCourseData] = useState([]);
  const [openLecture, setOpenLecture] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleGetCoursesDetails = async () => {
    try {
      let payload = {
        courseId: "",
        schoolId: "",
      };
      let response = await serviceAxiosInstance({
        // url of the api endpoint (can be changed)
        url: "course/",
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
                    {dummyCourses.map((lecture) => <SubjectCard  props={{...lecture, setOpenLecture}} />)}
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
