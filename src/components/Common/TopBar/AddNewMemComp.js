import React from "react";
import SearchInput from "../SearchInput";
import NewEntityButton from "../NewEntityButton";
import AddIcon from "@mui/icons-material/Add";
import "./AddNewMemComp.css";

export default function AddNewMemComp(props) {
  const {setAddNewBtnClick, buttonTitle} = props;
  return (
    <div className="middleHeader">
      <SearchInput />
      <NewEntityButton parentClassName="addEntity" setAddNewBtnClick={setAddNewBtnClick}>
        <AddIcon style={{ fontSize: "2.5rem" }} /> {buttonTitle}
      </NewEntityButton>
    </div>
  );
}
