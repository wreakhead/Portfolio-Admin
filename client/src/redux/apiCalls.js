import axios from "axios";
import {
  getAbout_Error,
  getAbout_Start,
  getAbout_Sucess,
} from "./aboutDataSlice";
import {
  addAbout_Error,
  addAbout_Start,
  addAbout_Sucess,
} from "./addAboutDataSlice";
import {
  addProject_Error,
  addProject_Start,
  addProject_Sucess,
} from "./addProjectDataSlice";
import {
  getProjects_Error,
  getProjects_Start,
  getProjects_Sucess,
} from "./projectDataSlice";
import { loginError, loginStart, loginSucess } from "./userSlice";

//token
export const getToken = () => {
  const token = JSON.parse(localStorage.getItem("adminUser"))?.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return config;
};

//url
export const URL = "http://localhost:7000";

//calls
export const loginUser = async (user, dispatch, history) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${URL}/admin/login`, user);
    localStorage.setItem("adminUser", JSON.stringify(res.data));
    history.push("/about");
    dispatch(loginSucess(res.data));
  } catch (err) {
    dispatch(loginError());
  }
};

export const getAbout = async (dispatch) => {
  dispatch(getAbout_Start());
  try {
    const data = await axios.get(`${URL}/data/about`);
    //console.log(data);
    dispatch(getAbout_Sucess(data.data));
  } catch (err) {
    dispatch(getAbout_Error());
  }
};

export const getProjects = async (dispatch) => {
  dispatch(getProjects_Start());
  try {
    const res = await axios.get(`${URL}/data/projects`);
    //console.log(res.data);
    dispatch(getProjects_Sucess(res.data));
  } catch (err) {
    dispatch(getProjects_Error());
  }
};

//addproject

export const addProject = async (props, dispatch) => {
  dispatch(addProject_Start());
  try {
    const config = getToken();
    const { data } = await axios.post(
      `${URL}/update/addProject`,
      props,
      config
    );
    console.log(data);
    dispatch(addProject_Sucess(data));
  } catch (error) {
    dispatch(addProject_Error());
  }
};

//addAbout

export const addAbout = async (props, dispatch) => {
  dispatch(addAbout_Start());
  try {
    const config = getToken();
    const { data } = await axios.post(`${URL}/update/addAbout`, props, config);
    dispatch(addAbout_Sucess(data));
  } catch (error) {
    dispatch(addAbout_Error());
  }
};
