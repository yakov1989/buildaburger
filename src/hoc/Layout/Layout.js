import React, { Component } from "react";
import { connect } from "react-redux";
import Aux from "../Auxillary";
import "./Layout.css";
import ToolBar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  SideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  SideDrawerCloseHandler = () => {
    this.setState({
      showSideDrawer: false
    });
  };
  render() {
    return (
      <Aux>
        <ToolBar
          isAuth={this.props.isLoggedin}
          drawerToggleClicked={this.SideDrawerToggleHandler}
        />
        <SideDrawer
          isAuth={this.props.isLoggedin}
          open={this.state.showSideDrawer}
          closed={this.SideDrawerCloseHandler}
        />
        <main className="Content">{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedin: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Layout);
