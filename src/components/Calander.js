import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./Calander.css";
import Calendar from "react-mui-calendar";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Button from "./Button";
import Eventcard from "./Eventcard";

const InputEvent = (props) => {
  // const [value, setValue] = useState(null);
  console.log("props", props);
  return (
    <div className="add-event-main">
      <div className="add-event-sub">
        <TextField id="standard-basic" label="Event" variant="standard" />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["TimePicker"]}>
            <TimePicker label="Start time" />
            <TimePicker label="End time" />
          </DemoContainer>
        </LocalizationProvider>
        <br></br>
        <Button children={"Add Event"} />
      </div>
    </div>
  );
};

export const Calander = () => {
  let defaultCalander = {
    day: "",
    month: "",
    year: "",
  };
  const [calander, setCalander] = useState(defaultCalander);
  const [card, setCard] = useState(false);
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

  const handleClick = ({ day, month, year }) => {
    setCalander({ day: day, month: month, year: year });
    setCard(true);
  };

  const eventCardcount = [1, 2, 3, 4, 5];
  return (
    <div style={{display: "flex",}}>
    <div
      className="calander-main"
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

      {/* {true && <InputEvent props={calander} />} */}
    </div>
      <div>
        {eventCardcount.map(() => (
          <Eventcard />
        ))}
      </div>
      </div>
  );
};
