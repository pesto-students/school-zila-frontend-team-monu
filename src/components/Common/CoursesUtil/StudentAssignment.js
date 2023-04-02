import React, { useState, useEffect} from "react";
import DataTable from "../Student/DataTable";
import { ASSIGNMENT_COLUMNS } from "../../../utils/constants";

const rows = [
    { id: 1, subject: "Sub1", description: "Improves sentance making.", teacherName: "Stark", date: "10 Jan, 2023", marks: "30" },
    { id: 2, subject: "Sub2", description: "Improves sentance making.", teacherName: "Stark", date: "10 Jan, 2023", marks: "30" },
    { id: 3, subject: "Sub3", description: "Improves sentance making.", teacherName: "Stark", date: "10 Jan, 2023", marks: "30" },
    { id: 4, subject: "Sub4", description: "Improves sentance making.", teacherName: "Stark", date: "10 Jan, 2023", marks: "30" },
    { id: 5, subject: "Sub2", description: "Improves sentance making.", teacherName: "Stark", date: "10 Jan, 2023", marks: "30" },
    { id: 6, subject: "Sub3", description: "Improves sentance making.", teacherName: "Stark", date: "10 Jan, 2023", marks: "30" },
    { id: 7, subject: "Sub1", description: "Improves sentance making.", teacherName: "Stark", date: "10 Jan, 2023", marks: "30" },
    { id: 8, subject: "Sub5", description: "Improves sentance making.", teacherName: "Stark", date: "10 Jan, 2023", marks: "30" },
    { id: 9, subject: "Sub4", description: "Improves sentance making.", teacherName: "Stark", date: "10 Jan, 2023", marks: "30" },
  ];

export default function StudentAssignment(){
    const [assignmentData, setAssignmentData] = useState(rows);

    useEffect(() => {
        handleGetAssignmentDetails();
    }, []);
  
    const handleGetAssignmentDetails = async () => {
      try {
        let payload = {
          schoolId: "",
          assignmentId: "",
        };
        let response = await serviceAxiosInstance({
          // url of the api endpoint (can be changed)
          url: "student/",
          method: "POST",
          data: payload,
        });
        if (response?.status) {
            setAssignmentData(response.data);
        }
      } catch (e) {
        console.log("Error");
      }
    };
  
    return (
        <div>
            <DataTable studentData={assignmentData} columns={ASSIGNMENT_COLUMNS} />
        </div>
    )
}