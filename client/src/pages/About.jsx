import React from "react";
import { useHistory } from "react-router-dom";
import AboutTable from "../components/AboutTable";
import AddAbout from "../components/AddAbout";
import Navbar from "../components/Navbar";
import "./About.css";
import { useDispatch } from "react-redux";
import { getAbout } from "../redux/apiCalls";
import { useEffect } from "react";
export default function About() {
  const history = useHistory();
  const dispatch = useDispatch();
  const getDataDispatch = async () => {
    await getAbout(dispatch);
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
            <div className="row d-flex justify-content-center">
              <div className="col-md-8">
                <AboutTable />
              </div>
              <div className="col-md-4">
                <AddAbout />
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
