import React from "react";
import css from "./ButtonContainer.module.css";

function ButtonContainer(props) {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  function evil(fn) {
    return new Function("return " + fn)();
  }
  function calculate(e) {
    if (e === "C") {
      props.setter("");
    } else if (e === "=") {
      props.setter(evil(props.value));
    } else {
      props.setter(props.value + e);
    }
  }
  return (
    <div className={css.buttonContainer}>
      {buttonNames.map((buttonName) => (
        <button
          className={css.button}
          value={buttonName}
          onClick={(e) => {
            calculate(e.target.value);
          }}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
}

export default ButtonContainer;
