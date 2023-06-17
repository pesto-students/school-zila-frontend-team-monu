import { useState } from "react";
import "./AddClass.css";
import Box from "@mui/material/Box";
import serviceAxiosInstance from "../../../service/axiosService";
const initialFormData = {
    class_name:"",
    abbreviation:""
}
export const AddClass = () => {
    const [form,setForm] = useState(initialFormData);
    const handleSubmit = async() => {
        let payload = {...form,
            school_uuid: localStorage.getItem("school_uuid"),
        }
        console.log("=====================payload",payload);
        let response = await serviceAxiosInstance({
            url: "/class/add",
            method: "POST",
            data: payload,
          });
          if (response?.status) {
            window.location.reload();
          }
          else
          {
            alert(response.data.msg?.toString() || "Data could't be saved due to internal server error");
          }
    }
    const handleClassName = (e) => {
        form.class_name = e.target.value;
        setForm({...form});
    }
    const handleClassAbbreviation = (e) => {
        form.abbreviation = e?.target?.value;
        setForm({...form});
    }

    return (
        <div className="mainContainer">
        <div className="mainMiddleContainer">
          <div className="middleContainer">
          <div className="personalDetailHeader commonFormHeader">
                  <p>Add Class</p>
          </div>
          <div className="personalDetailsForm" style={{padding:"12px 24px"}}>
            <Box display="flex" flexDirection="column" gap="12px" marginTop="22px">
                <Box display="flex" gap="42px">
                    <label htmlFor="studentName">Name *</label>
                        <input
                        type="text"
                        id="studentName"
                        name="className"
                        autoComplete="new-studentName"
                        onChange={handleClassName}
                        />

                </Box>
                <Box  display="flex" gap="8px">
                    <label htmlFor="studentName">Abbreviation
 *</label>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      autoComplete="new-studentName"
                      onChange={handleClassAbbreviation}
                    />
                </Box>
                <Box>
                    <input
                        type="button"
                        id="submit"
                        name="submit"
                        value="Submit"
                        className="submitButton"
                        onClick={handleSubmit}
                        style={{width:"35%"}}
                    />
                </Box>
            </Box>
            </div>
           </div>
         </div>
         </div>   
    )
}
