import {
  addTodo,
  editTodo,
  removeTodo,
  startAddTodo,
  startEditTodo,
  startRemoveTodo,
  startSetTodos,
} from "../../actions/todos";
import mockedTodos from "../fixtures/todosFixture";
import configurMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";

const createMockStore = configurMockStore([thunk]);

beforeEach((done) => {
  const todoData = {};
  mockedTodos.forEach(
    ({ id, completed, title, details, priority, createdAt }) => {
      todoData[id] = { title, completed, details, priority, createdAt };
    }
  );
  database
    .ref("todos")
    .set(todoData)
    .then(() => done());
});

afterEach((done) => {
  database
    .ref("todos")
    .set({})
    .then(() => done());
});

test("Should generete remove todo object correctly", () => {
  const result = removeTodo({ id: "12345" });
  expect(result).toEqual({
    type: "REMOVE_TODO",
    id: "12345",
  });
});

test("Should generate edit todo object correctly", () => {
  const result = editTodo("12345", { title: "NewTestTitle" });
  expect(result).toEqual({
    type: "EDIT_TODO",
    id: "12345",
    updates: {
      title: "NewTestTitle",
    },
  });
});

test("Should correctly generate create todo object with data", () => {
  const result = addTodo(mockedTodos[0]);
  expect(result).toEqual({
    type: "ADD_TODO",
    todo: mockedTodos[0],
  });
});

test("Should add todo to database and store", (done) => {
  const store = createMockStore({});
  const todoData = {
    title: "Test todo",
    completed: false,
    details: "This is the test todo",
    priority: 2,
    createdAt: 900,
  };
  store
    .dispatch(startAddTodo(todoData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_TODO",
        todo: {
          id: expect.any(String),
          ...todoData,
        },
      });
      return database.ref(`todos/${actions[0].todo.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(todoData);
      done();
    });
});

test("Should add todo with default data to database and store", (done) => {
  const store = createMockStore({});
  const todoData = {
    title: "",
    completed: false,
    details: "",
    priority: 1,
    createdAt: 0,
  };
  store
    .dispatch(startAddTodo(todoData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_TODO",
        todo: {
          id: expect.any(String),
          ...todoData,
        },
      });
      return database.ref(`todos/${actions[0].todo.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(todoData);
      done();
    });
});

test("Should remove data from firebase", (done) => {
  const store = createMockStore({});
  store.dispatch(startRemoveTodo({ id: mockedTodos[1].id })).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "REMOVE_TODO",
      id: mockedTodos[1].id,
    });
    done();
  });
});

test("Should edit data in firebase", (done) => {
  const store = createMockStore({});
  store
    .dispatch(startEditTodo(mockedTodos[1].id, { title: "New title" }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "EDIT_TODO",
        id: mockedTodos[1].id,
        updates: {
          title: "New title",
        },
      });
      done();
    });
});

test("Should fetch the todos from firebase", (done) => {
  const store = createMockStore({});
  store.dispatch(startSetTodos()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_TODOS",
      todos: mockedTodos,
    });
    done();
  });
});
