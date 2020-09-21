import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../src/context/UserContext";
import JobFilter from "../components/jobboard/JobFilter";

const Home = () => {
  const { userData } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!userData.user) history.push("/login");
  });
  return (
    <div>
      <JobFilter />
    </div>
  );
};

export default Home;
