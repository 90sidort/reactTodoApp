import { login, logout } from "../../actions/auth";

test("Should generete login object correctly", () => {
  const result = login("aaa123");
  expect(result).toEqual({
    type: "LOGIN",
    uid: "aaa123",
  });
});

test("Should generete logout object correctly", () => {
  const result = logout();
  expect(result).toEqual({
    type: "LOGOUT",
  });
});
