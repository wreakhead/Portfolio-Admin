import React from "react";
import "./ProjectTable.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function ProjectTable() {
  const data = useSelector((state) => state.projectData.data);
  const dataAdded = useSelector((state) => state.addProject.pending);

  useEffect(() => { console.log("re")}, [dataAdded]);

  return (
    <div className="projectTable shadow p-1" style={{ overflowX: "auto" }}>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">title</th>
            <th scope="col">tech</th>
            <th scope="col">describe</th>
            <th scope="col">linkSource</th>
            <th scope="col">linkAction</th>
            <th scope="col">type</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, i) => {
            return (
              <tr key={item._id}>
                <th scope="row">{i + 1}</th>
                <td>{item.title}</td>
                <td>{item.tech}</td>
                <td>{item.describe}</td>
                <td>{item.linkSource}</td>
                <td>{item.linkAction}</td>
                <td>{item.type}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
