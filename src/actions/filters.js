// SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

// SHOW_BY_STATUS
export const showByStatus = (completed = "all") => ({
  type: "SHOW_BY_STATUS",
  completed,
});

// SET_PRIORITY_FILTER
export const setPriorityFilter = (priorityValue = -1) => ({
  type: "SET_PRIORITY_FILTER",
  priorityValue,
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: "SORT_BY_DATE",
  sortBy: "date",
});

// SORT_BY_PRIORITY
export const sortByPriority = () => ({
  type: "SORT_BY_PRIORITY",
  sortBy: "priority",
});
// SET_START_DATE
export const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});
// SET_END_DATA
export const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});
