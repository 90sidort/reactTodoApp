import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("Should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    completed: "all",
    priorityValue: -1,
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("Should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_PRIORITY" });
  expect(state.sortBy).toBe("priority");
});

test("Should set sortBy to date", () => {
  const previousState = {
    text: "",
    completed: "all",
    priorityValue: -1,
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  };
  const state = filtersReducer(previousState, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
});

test("Should set text filter to specific string", () => {
  const state = filtersReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text: "test",
  });
  expect(state.text).toBe("test");
});

test("Should set priority filter to specific value", () => {
  const state = filtersReducer(undefined, {
    type: "SET_PRIORITY_FILTER",
    priorityValue: 0,
  });
  expect(state.priorityValue).toBe(0);
});

test("Should set priority filter to specific value", () => {
  const state = filtersReducer(undefined, {
    type: "SHOW_BY_STATUS",
    completed: true,
  });
  expect(state.completed).toBe(true);
});

test("Should set text filter to empty string", () => {
  const previousState = {
    text: "test",
    priorityValue: -1,
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  };
  const state = filtersReducer(previousState, {
    type: "SET_TEXT_FILTER",
    text: "",
  });
  expect(state.text).toBe("");
});

test("Should set priority filter to 2", () => {
  const previousState = {
    text: "test",
    priorityValue: 1,
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  };
  const state = filtersReducer(previousState, {
    type: "SET_PRIORITY_FILTER",
    priorityValue: 2,
  });
  expect(state.priorityValue).toBe(2);
});

test("Should set start date to a specific date", () => {
  const state = filtersReducer(undefined, {
    type: "SET_START_DATE",
    startDate: moment(0).valueOf(),
  });
  expect(state.startDate).toBe(moment(0).valueOf());
});

test("Should set end date to a specific date", () => {
  const state = filtersReducer(undefined, {
    type: "SET_END_DATE",
    endDate: moment(0).valueOf(),
  });
  expect(state.endDate).toBe(moment(0).valueOf());
});
