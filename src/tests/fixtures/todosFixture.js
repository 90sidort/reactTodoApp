import moment from "moment";

const todos = [
  {
    id: "1",
    completed: true,
    title: "First todo",
    details: "These are first details",
    priority: 0,
    createdAt: moment(0).add(3, "days").valueOf(),
  },
  {
    id: "2",
    completed: false,
    title: "Second todo",
    details: "These are second details",
    priority: 2,
    createdAt: moment(0).subtract(3, "days").valueOf(),
  },
  {
    id: "3",
    completed: false,
    title: "Third",
    details: "These are third details",
    priority: 1,
    createdAt: moment(0).add(5, "days").valueOf(),
  },
];

export default todos;
