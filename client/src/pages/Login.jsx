import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {loginUser } from "../redux/apiCalls";

import "./login.css";
export default function Login() {
  //redux
  const dispatch = useDispatch();

  const history = useHistory();
  const mobile = useRef();
  const password = useRef();
  if (localStorage.getItem("adminUser")) {
    history.push("/about");
  }

  const formsubmitted = async (e) => {
    e.preventDefault();
    const user = {
      mobile: mobile.current.value,
      password: password.current.value,
    };
    try {
      await loginUser(user, dispatch, history);
      
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="loginPage">
      <div className="">
        <form onSubmit={formsubmitted} className="loginBox shadow p-3 mb-5">
          <h3 className="Admin">Admin</h3>
          <input
            ref={mobile}
            required
            type="text"
            className="loginInput"
            placeholder="mobile no."
          />
          <input
            ref={password}
            required
            type="password"
            className="loginInput"
            placeholder="password"
          />
          <button type="submit" className="loginButton">
            login
          </button>
        </form>
      </div>
    </div>
  );
}
