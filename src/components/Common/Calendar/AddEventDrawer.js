import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from "dayjs";
import "./AddEventDrawer.css";

let defaultNewEvent = {
  newEventName: "",
  newEventDescription: "",
  newTime: dayjs(),
}

export default function AddEventDrawer({props}) {
  const { setNewEventValue, openEventModal, setOpenEventModal} = props;
  console.log("stttt",openEventModal);
  const [eventValues, setEventValues] = useState(defaultNewEvent);

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenEventModal(false);
  };

  const list = () => {
    const handleChange =(e)=> {
      e.preventDefault();
      const {name, value} = e.target;
      setEventValues({...eventValues, [name]:value})
    }

    const handleSubmit =(e)=> {
      e.preventDefault();
      setNewEventValue(eventValues);
      setOpenEventModal(false);
    }
    return (
      <Box
        sx={{ width: 300, height: 150 }}
        role="presentation"
      >
        <div
        className="modal-main">
          <div className="modal-field">
            <label htmlFor="newEventName">Event Name:</label>
            <input type="text" name="newEventName" id="newEventName" value={eventValues.newEventName} onChange={handleChange} />
          </div>
          <div className="modal-field">
            <label htmlFor="eventDescription">Event Description:</label>
            <input
              type="text"
              name="newEventDescription"
              id="newEventDescription"
              value={eventValues.newEventDescription}
              onChange={handleChange}
            />
          </div>
          <div className="modal-field">
            <label htmlFor="eventTime">Event Time:</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
              sx={{height: 45, backgroundColor:"#f3f6f8"}}
                value={eventValues.newTime}
                onChange={(newValue) => setEventValues({...eventValues, [newTime]:newValue})}
              />
            </LocalizationProvider>
          </div>
          <button type="submit" onClick={handleSubmit}>Add Event</button>
        </div>
      </Box>
    );
  };

  return (
    <div>
      <>
        <Drawer anchor={"right"} open={openEventModal} onClose={toggleDrawer()}>
          {list()}
        </Drawer>
      </>
    </div>
  );
}
