import React from "react";
import { useHistory } from "react-router-dom";
import AddProject from "../components/AddProject";
import Navbar from "../components/Navbar";
import ProjectTable from "../components/ProjectTable";
import "./Project.css";
import { useDispatch } from "react-redux";
import { getProjects } from "../redux/apiCalls";
import { useEffect } from "react";

export default function Project() {
  const history = useHistory();
  const dispatch = useDispatch();
  const getDataDispatch = async () => {
    await getProjects(dispatch);
  };

  useEffect(() => {
    getDataDispatch();
  }, []);

  return (
    <>
      {localStorage.getItem("adminUser") ? (
        <>
          <Navbar />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <ProjectTable />
              </div>
              <div className="col-lg-4">
                <AddProject />
              </div>
            </div>
          </div>
        </>
      ) : (
        history.push("/")
      )}
    </>
  );
}
