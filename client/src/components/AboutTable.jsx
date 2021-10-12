import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import "./AboutTable.css";

export default function AboutTable() {
  const data = useSelector((state) => state.aboutData.data);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="aboutTable shadow p-1" style={{ overflowX: "auto" }}>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">title</th>
            <th scope="col">image</th>
            <th scope="col">describe</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, i) => {
            return (
              <tr key={item._id}>
                <th scope="row">{i}</th>
                <td>{item.title}</td>
                <td>{item.image}</td>
                <td>{item.describe}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
