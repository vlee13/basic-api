import React, { useEffect, useState } from "react";
import axios from "axios";

const RandomStudent = () => {
  const [randomStudent, setRandomStudent] = useState();

  useEffect(() => {
    axios.get("http://localhost:3000/randomize").then((res) => {
      console.log(res.data);
      setRandomStudent(res.data);
    });
  }, []);

  return (
    <div>
      <ul>
        <li>
          <h1>
            {randomStudent?.firstname}
            {randomStudent?.lastname}
          </h1>
        </li>
        <li>
          <img src={randomStudent?.img} alt="randomStudentPic" />
        </li>
      </ul>
    </div>
  );
};

export default RandomStudent;
