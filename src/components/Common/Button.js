import * as React from "react";
import { Link } from "react-router-dom";

export default function ColorButtons(props) {
  let { children, parentClassName, route } = props;
  return (
    <Link to={route}>
      <button className={parentClassName}>{children}</button>
    </Link>
  );
}
