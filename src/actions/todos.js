import database from "../firebase/firebase";

// ADD_TODO
export const addTodo = (todo) => ({
  type: "ADD_TODO",
  todo,
});

export const startAddTodo = (todoData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      title = "",
      details = "",
      priority = 1,
      completed = false,
      createdAt = 0,
    } = todoData;
    const todo = { title, details, priority, completed, createdAt };
    return database
      .ref(`users/${uid}/todos`)
      .push(todo)
      .then((ref) => {
        dispatch(
          addTodo({
            id: ref.key,
            ...todo,
          })
        );
      });
  };
};

// REMOVE_TODO
export const removeTodo = ({ id } = {}) => ({
  type: "REMOVE_TODO",
  id,
});

export const startRemoveTodo = ({ id }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/todos/${id}`)
      .remove()
      .then(() => {
        dispatch(removeTodo({ id }));
      });
  };
};

// EDIT_TODO
export const editTodo = (id, updates) => ({
  type: "EDIT_TODO",
  id,
  updates,
});

export const startEditTodo = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}todos/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editTodo(id, updates));
      });
  };
};

export const setTodos = (todos) => ({
  type: "SET_TODOS",
  todos,
});

export const startSetTodos = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/todos`)
      .once("value")
      .then((snapshot) => {
        const todos = [];
        snapshot.forEach((childSnapshot) => {
          todos.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setTodos(todos));
      });
  };
};
