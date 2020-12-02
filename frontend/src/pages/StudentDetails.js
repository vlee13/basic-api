import { useState, useEffect } from "react";
import axios from "axios";

const StudentDetails = (props) => {
  console.log(props);
  const [details, setDetails] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/students/${props.match.params.id}`)
      .then((res) => {
        setDetails(res.data);
      });
  }, []);

  return (
    <div>
      <ul>
        <li>
          {details?.firstname} {details?.lastname}
        </li>
        <li>
          <img src={details?.img} alt="detailImg" />
        </li>
      </ul>
    </div>
  );
};

export default StudentDetails;
