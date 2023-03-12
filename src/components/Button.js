import * as React from "react";

export default function ColorButtons(props) {
  let { children, parentClassName } = props;
  return <button className={parentClassName}>{children}</button>;
}
