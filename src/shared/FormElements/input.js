import React, { useState } from "react";

import "./input.css";

const Input = (props) => {
  const [inputValue, setInputValue] = useState("");

  const changeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputValue}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        value={inputValue}
      ></textarea>
    );

  return (
    <div className={`form-control`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;
