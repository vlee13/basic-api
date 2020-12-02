import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllStudents = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/students").then((res) => {
      setInfo(res.data);
    });
  }, []);

  const displayStudents = () => {
    return info.map((eachStudent) => {
      return (
        <ul>
          <li>
            <h1>
              <Link to={`/student/${eachStudent._id}`}>
                {eachStudent.firstname} {eachStudent.lastname}
              </Link>
            </h1>
          </li>
        </ul>
      );
    });
  };

  return (
    <div className="App">
      <div>{displayStudents()}</div>
    </div>
  );
};

export default AllStudents;
