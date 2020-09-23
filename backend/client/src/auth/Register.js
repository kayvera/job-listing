import React, { useState, useContext } from "react";
import Axios from "axios";
import UserContext from "../context/UserContext";
import { useHistory } from "react-router-dom";
import ErrorNotice from "../misc/ErrorNotice";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [error, setError] = useState("");

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        email,
        password,
        passwordCheck,
        displayName,
      };
      await Axios.post("/api/users/register", newUser);
      const loginRes = await Axios.post("/api/users/login", {
        email,
        password,
      });
      setUserData({ token: loginRes.data.token, user: loginRes.data.user });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div>
      <h2 className="flex flex-col mt-4 min-w-full items-center mx-64 font-bold text-3xl uppercase">
        Register
      </h2>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form
        className="flex flex-col text-l min-w-full items-center mx-64"
        onSubmit={submit}
      >
        <label className="mt-4 mr-56 pl-2" htmlFor="register-email">
          Email
        </label>
        <input
          className="mt-2 border-black border-solid border w-64 p-1"
          id="register-email "
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="mt-4 mr-48 pl-1" htmlFor="register-password">
          Password
        </label>
        <input
          className="mt-2 border-black border-solid border w-64 p-1"
          id="register-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="mt-4 mr-40 pl-5" htmlFor="register-password">
          Verify Password
        </label>
        <input
          className="mt-2 border-black border-solid border w-64 p-1"
          type="password"
          placeholder="Verify password"
          onChange={(e) => setPasswordCheck(e.target.value)}
        />

        <label className="mt-4 mr-48 pl-1" htmlFor="register-display-name">
          Username
        </label>
        <input
          className="mt-2 border-black border-solid border w-64 p-1"
          id="register-display-name"
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <input
          type="submit"
          value="Register"
          className="cursor-pointer font-bold mt-4 py-2 px-4 text-white bg-gray-800 rounded uppercase"
        />
      </form>
    </div>
  );
};

export default Register;
