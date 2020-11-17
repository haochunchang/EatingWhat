import React, { Component } from "react";
import "../components/App.css";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      errormsg: "",
      infomsg: "",
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      errormsg: error,
      infomsg: info,
    });
  }

  render() {
    const { hasError, errormsg, infomsg } = this.state;
    if (hasError) {
      return (
        <div>
          <h1>Oops, somthing wrong happens...</h1>
          <p>The error message is: {errormsg}.</p>
          <p>The info message is {infomsg}.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
