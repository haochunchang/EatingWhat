import React from "react";
import { shallow } from "enzyme";
import ErrorBoundary from "./ErrorBoundary";

describe("ErrorBoundary", () => {
  const wrapper = shallow(<ErrorBoundary />);
  const componentInstance = wrapper.instance();

  it("shallow rendering correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("initial states of error boundary", () => {
    expect(componentInstance.state.hasError).toBeFalsy();
    expect(componentInstance.state.errormsg).toBeFalsy();
    expect(componentInstance.state.infomsg).toBeFalsy();
  });

  it("component did catch error", () => {
    const error = "Testing error!!";
    const info = "This is the info!";
    componentInstance.componentDidCatch(error, info);
    expect(componentInstance.state.hasError).toBeTruthy();
    expect(componentInstance.state.errormsg).toEqual(error);
    expect(componentInstance.state.infomsg).toEqual(info);
  });
});
