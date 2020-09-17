import authReducer from "../../reducers/auth";

test("Should set uid for login", () => {
  const action = {
    type: "LOGIN",
    uid: "123abc",
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test("Should wipe out uid for logout", () => {
  const action = {
    type: "LOGOUT",
  };
  const state = authReducer({ uid: "345asv" }, action);
  expect(state).toEqual({});
});
