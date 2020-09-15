import TodoForm from "../../components/TodoForm";
import { shallow } from "enzyme";
import React from "react";
import mockTodos from "../fixtures/todosFixture";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

test("Should be able to render TodoForm component correctly", () => {
  const wrapper = shallow(<TodoForm />);
  expect(wrapper).toMatchSnapshot();
});

test("Should render TodoForm with data correctly", () => {
  const wrapper = shallow(<TodoForm todo={mockTodos[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test("Should render error for invalid form submission", () => {
  const wrapper = shallow(<TodoForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("Should set title on input change", () => {
  const value = "Tested Title";
  const wrapper = shallow(<TodoForm />);
  wrapper.find("input").at(0).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("title")).toBe(value);
});

test("Should set details on input change", () => {
  const value = "Test note";
  const wrapper = shallow(<TodoForm />);
  wrapper.find("textarea").at(0).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("details")).toBe(value);
});

test("Should set priority on valid input change", () => {
  const value = 1;
  const wrapper = shallow(<TodoForm />);
  wrapper.find("select").at(0).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("priority")).toBe(value);
});

test("Should call onSubmit prop on valid form submission", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <TodoForm todo={mockTodos[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    title: mockTodos[0].title,
    completed: mockTodos[0].completed,
    priority: mockTodos[0].priority,
    createdAt: mockTodos[0].createdAt.valueOf(),
    details: mockTodos[0].details,
  });
});

test("Should correctly set date", () => {
  const newDate = moment();
  const wrapper = shallow(<TodoForm />);
  wrapper.find("SingleDatePicker").prop("onDateChange")(newDate);
  expect(wrapper.state("createdAt")).toBe(newDate);
});

test("Should correctly set focus", () => {
  const wrapper = shallow(<TodoForm />);
  wrapper.find("SingleDatePicker").prop("onFocusChange")({ focused: true });
  expect(wrapper.state("calendarFocused")).toBe(true);
});
