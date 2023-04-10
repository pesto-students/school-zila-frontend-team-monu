import * as React from "react";

export default function NewEntityButton(props) {
  let { children, parentClassName, setAddNewBtnClick } = props;
  const onSelect =()=> {setAddNewBtnClick(true)}
  return (
      <button className={parentClassName} onClick={onSelect}>{children}</button>
  );
}
