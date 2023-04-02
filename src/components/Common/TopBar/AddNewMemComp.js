import React from "react";
import SearchInput from "../SearchInput";
import NewEntityButton from "../NewEntityButton";
import AddIcon from "@mui/icons-material/Add";
import "./AddNewMemComp.css";

export default function AddNewMemComp(props) {
  return (
    <div className="middleHeader">
      <SearchInput />
      <NewEntityButton parentClassName="addStudent" route={props.route}>
        <AddIcon style={{ fontSize: "2.5rem" }} /> {props.buttonTitle}
      </NewEntityButton>
    </div>
  );
}
