import React, { useState,useEffect } from "react";
import TextField from "@mui/material/TextField";
import "./Calendar.css";
import Calendar from "react-mui-calendar";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import NewEntityButton from "../NewEntityButton";
import AddEventDrawer from "./AddEventDrawer";
import Eventcard from "./Eventcard";

let snackBarMessage ="";
const testData = [
  {
    day: 25,
    month: 3,
    year: 2023,
    name: "Christmas",
    completed: false,
    color: "red",
  },
  {
    day: 15,
    month: 3,
    year: 2023,
    name: "New year",
    completed: false,
    color: "yellow",
  },
];

let defaultCalendar = {
  day: "",
  month: "",
  year: "",
};

let defaultValues={
  event:'',
  startTime: '',
  endTime: '',
}

const InputEventModal = ({props}) => {
  const [inputvalues, setInputValues] = useState(defaultValues);

  console.log("props",props);
  const {newEventValue, setNewEventValue, setOpenEventModal} = props;  

  function handleChange (event){
    event.preventDefault();
    const {name, value} = event.target;
    console.log("event.target",event.target.value)
    setInputValues({...defaultValues , [name]: value})
    console.log("----value",inputvalues)

    // setNewEventValue({...newEventValue, [name]: value})
  }

  function onSubmit(){

    setOpenEventModal(false)
    console.log("Submited value",inputvalues)
  }
  console.log("newEventValue",newEventValue)
  return (
    <div className="add-event-main">
      <div className="add-event-sub">
        <TextField id="standard-basic" label="Enter event" variant="standard" value={inputvalues.event} onChange={handleChange} />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["TimePicker"]}>
            <TimePicker label="Start time" value={inputvalues.startTime} onChange={handleChange} />
            <TimePicker label="End time" value={inputvalues.endTime} onChange={handleChange} />
          </DemoContainer>
        </LocalizationProvider>
        <br></br>
        <button onClick={onSubmit}>Add New Event</button>
      </div>
    </div>
  );
};

export const EventCalendar = () => {  
  const [calendarData, setCalendarData] = useState(defaultCalendar);
  const [openToaster, setOpenToaster] = useState(false);
  const [alertStatus, setAlertStatus] = useState(null);
  const [eventDate, setEventDate] = useState(defaultCalendar);
  const [openEventModal, setOpenEventModal] = useState(false);
  const [newEventValue, setNewEventValue] = useState({});


  useEffect(() => {
    // handleGetCalendarData();
  })

  const handleGetCalendarData = async () => {
    try {
      let response = await serviceAxiosInstance({
        // url of the api endpoint (can be changed)
        url: "calendar/",
        method: "POST",
        data: calendarData,
      });
      if (response?.status) {
        snackBarMessage = response?.message;
        updateTosterStatus(setOpenToaster, setAlertStatus, TOASTER_STATUS.SUCCESS);
      } else {
        snackBarMessage = response?.message;
        updateTosterStatus(setOpenToaster, setAlertStatus, TOASTER_STATUS.ERROR);
      }
    } catch (e) {
      snackBarMessage = response?.message;
      updateTosterStatus(setOpenToaster, setAlertStatus, TOASTER_STATUS.ERROR);
      console.log("Error");
    }
  };

  const handleClick = ({ day, month, year }) => {
    setEventDate({ day: day, month: month, year: year });
    setOpenEventModal(true);
  };

  const eventCardcount = [1, 2, 3, 4, 5];
  return (
    <div style={{display: "flex",}}>
    <div
      className="calendar-main"
      style={{
        marginLeft: "18%",
        height: "60%x",
        width: "70%",
        color: "red",
      }}
    >
      <Calendar
        primaryColor="#5DBC67"
        secondaryColor="#FFFFFF"
        data={testData}
        dataDisplay="list"
        handleClickDay={handleClick}
      />

      <AddEventDrawer props={{setNewEventValue, openEventModal, setOpenEventModal}} />
    </div>
      <div>
        {eventCardcount.map(() => (
          <Eventcard />
        ))}
      </div>
      {openToaster && (
        <ToasterSnackbar
          status={alertStatus}
          openToaster={openToaster}
          message={"Message for Toast"}
          setOpenToaster={setOpenToaster}
          alertStatus={alertStatus}
          setAlertStatus={setAlertStatus}
        />
      )}
      </div>
  );
};
