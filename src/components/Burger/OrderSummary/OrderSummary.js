import React, { Component } from "react";
import Aux from "../../../hoc/Auxillary";
import Button from "../../UI/Button/Button";
class OrderSummary extends Component {
  // יכלנו להשמתמש בזה כקומפונטטה פונקציונלית

  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients).map(
      igKey => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Your Order is</h3>
        <p> Burger Ingredients:</p>
        <ul>{ingredientsSummary}</ul>
        <p>
          <strong>Total Price: {this.props.totalPrice} $</strong>
        </p>
        <p>Continue to Checkout ?</p>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          Continue
        </Button>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          Cancel
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
