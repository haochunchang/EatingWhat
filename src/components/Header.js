import React, { Component } from "react";

class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <div className="tc bw3 br-pill fl-w100">
        <header className="header">
          <h1 className="f1">What Do You Want To Eat?</h1>
        </header>
      </div>
    );
  }
}

export default Header;
