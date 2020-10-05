import React, { useState, useContext } from "react";
import Axios from "axios";
import UserContext from "../context/UserContext";
import "../index.css";
import { useHistory } from "react-router-dom";
import ErrorNotice from "../misc/ErrorNotice";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = {
        email,
        password,
      };
      await Axios.post("/api/users/login", loginUser);
      const loginRes = await Axios.post("/api/users/login", loginUser);
      setUserData({ token: loginRes.data.token, user: loginRes.data.user });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div>
      <h2 className="flex flex-col mt-4 lg:min-w-full items-center mx-64 font-bold text-3xl uppercase">
        Login
      </h2>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form
        className="flex flex-col text-l lg:min-w-full items-center mx-64"
        onSubmit={submit}
      >
        <label className="mt-4 mr-56 pl-1" htmlFor="login-email">
          Email
        </label>
        <input
          className="mt-2 border-black border-solid border w-64 p-1"
          id="login-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="mt-4 mr-56 pl-8" htmlFor="login-password">
          Password
        </label>
        <input
          className="mt-2 border-black border-solid border w-64 p-1"
          id="login-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="submit"
          value="Login"
          className="cursor-pointer font-bold mt-4 py-2 px-4 text-white bg-gray-800 rounded uppercase"
        />
      </form>
    </div>
  );
};

export default Login;
