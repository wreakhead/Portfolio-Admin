import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import aboutReducer from "./aboutDataSlice";
import projectReducer from "./projectDataSlice";
import addprojectReducer from "./addProjectDataSlice";
import addAboutReducer from "./addAboutDataSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    aboutData: aboutReducer,
    projectData: projectReducer,
    addProject: addprojectReducer,
    addAbout: addAboutReducer,
  },
});
