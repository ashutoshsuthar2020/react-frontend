import React from "react";
import css from "./Display.module.css";
function Display(props) {
  return (
    <input
      type="text"
      id="display"
      className={css.display}
      value={props.value}
      readonly
    />
  );
}
export default Display;
