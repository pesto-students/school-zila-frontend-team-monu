import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

let defaultNewEvent = {
  newEventName: "",
  newEventDescription: "",
  newTime: "",
  newHours: 0,
  newMinutes: 0,
  newMeridiem: "AM",
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
    let mummy = ['AM', 'PM'];
    const selectHour = Array.from({length: 12}, (_, index) => <option key={index + 1} value={index+1}>{index + 1}</option>);
    const selectMinutes = Array.from({length: 59}, (_, index) => <option key={index} value={index}>{index}</option>);
    const selectMeridiem = mummy.map((m)=> <option key={m} value={m}>{m}</option>);

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
        sx={{ width: 250, height: 150 }}
        role="presentation"
      >
        <div
        id=""
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            alignItems: "center",
          }}
        >
          <label htmlFor="newEventName">Event Name:</label>
          <input type="text" name="newEventName" id="newEventName" value={eventValues.newEventName} onChange={handleChange} />
          <label htmlFor="eventDescription">Event Description:</label>
          <input
            type="text"
            name="newEventDescription"
            id="newEventDescription"
            value={eventValues.newEventDescription}
            onChange={handleChange}
          />
          <label htmlFor="eventTime">Event Time:</label>
          <div id="newTime" style={{display: "flex"}}>
            <select name="newHours" id="newHours">{selectHour}</select>
            <selec name="newMinutes" id="newMinutes">{selectMinutes}</selec>
            <select name="newMeridiem" id="newMeridiem">{selectMeridiem}</select>
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
