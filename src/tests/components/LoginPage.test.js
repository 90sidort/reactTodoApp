import { LoginPage } from "../../components/LoginPage";
import React from "react";
import { shallow } from "enzyme";

let startLogin = jest.fn();

test("Should correctly render LoginPage component", () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test("Should call startLogin on button click", () => {
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  wrapper.find("button").simulate("click");
  expect(startLogin).toHaveBeenCalled();
});
