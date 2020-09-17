import { Header } from "../../components/Header";
import React from "react";
import { shallow } from "enzyme";

let startLogout = jest.fn();

test("Should correctly render Header component", () => {
  const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test("Should call startLogout on button click", () => {
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find("button").simulate("click");
  expect(startLogout).toHaveBeenCalled();
});
