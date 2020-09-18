import React from "react";
import { connect } from "react-redux";
import { startLogin, startLogUser } from "../actions/auth";

export const LoginPage = ({ startLogin, startLogUser }) => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Todo App</h1>
        <p>It's time to get more organized!</p>
        <button className="buttonBlue" onClick={startLogin}>
          Login with Google
        </button>
        <button className="buttonBlue" onClick={startLogUser}>
          Test user
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startLogUser: () => dispatch(startLogUser()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
