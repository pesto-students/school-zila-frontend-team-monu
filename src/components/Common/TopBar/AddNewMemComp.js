import React from "react";
import SearchInput from "../SearchInput";
import ColorButtons from "../Button";
import AddIcon from "@mui/icons-material/Add";
import "./AddNewMemComp.css";

export default function AddNewMemComp(props) {
  return (
    <div className="middleHeader">
      <SearchInput />
      <ColorButtons parentClassName="addStudent">
        <AddIcon style={{ fontSize: "2.5rem" }} /> {props.buttonTitle}
      </ColorButtons>
    </div>
  );
}
