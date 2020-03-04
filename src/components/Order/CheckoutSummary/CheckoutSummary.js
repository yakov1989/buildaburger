import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import "./CheckoutSummary.css";
const CheckoutSummary = props => {
  return (
    <div className="CheckoutSummary">
      <h1
        style={{
          color: "black",
          fontStyle: "italic",
          fontWeight: "bold",
          marginBottom: "50px"
        }}
      >
        Have it Your Way!
      </h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button clicked={props.checkoutContinued}>CONTINUE</Button>
      <Button clicked={props.checkoutCancelled}>CANCEL</Button>
    </div>
  );
};

export default CheckoutSummary;
