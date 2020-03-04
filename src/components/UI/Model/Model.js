import React, { Component } from "react";
import "./Modal.css";
import Aux from "../../../hoc/Auxillary";
import Backdrop from "../../UI/Model/Backdrop/Backdrop";
class Model extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    ); // בודק שלא יהיה רענון מיותר לדף אם חלון המודל לא קפץ
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className="Modal"
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}
export default Model;
