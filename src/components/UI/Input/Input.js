import React from "react";
import "./Input.css";
const input = props => {
  let inputElement = false;

  if (props.invalid && props.shouldValidate && props.touched) {
    inputElement = true;
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputElement ? " Invalid" : "InputElement"}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputElement ? " Invalid" : "InputElement"}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputElement ? " Invalid" : "InputElement"}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option value={option.value}>{option.display}</option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={
            props.invalid && props.shouldValidate ? " Invalid" : "InputElement"
          }
          {...props.elementConfig}
          value={props.value}
        />
      );
  }

  return (
    <div className="Input">
      <label className="label"> {props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
