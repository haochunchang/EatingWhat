import React, { Component, Fragment } from "react";

class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <Fragment>
        <header className="header">
          <h1 className="f1">What Do You Want To Eat?</h1>
        </header>
      </Fragment>
    );
  }
}

export default Header;
