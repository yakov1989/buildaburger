import React from "react";
import "./BuildControl.css";
const buildControl = props => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.label}</div>
      <button
        className="Increase"
        onClick={props.added}
        disabled={props.disabledIncrease}
      >
        Increase
      </button>
      <button
        className="Decrease"
        onClick={props.removed}
        disabled={props.disabled}
      >
        Decrease
      </button>
    </div>
  );
};

export default buildControl;
