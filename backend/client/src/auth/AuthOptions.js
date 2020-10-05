import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";

const AuthOptions = () => {
  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <nav className="auth-options">
      {userData.user ? (
        <button
          onClick={logout}
          className="cursor-pointer font-bold absolute self-center py-3 mt-1 lg:mt-20 right-0 lg:py-4 px-8 lg:m-8 text-white bg-gray-800 rounded uppercase"
        >
          Log Out
        </button>
      ) : (
        <>
          <button
            onClick={login}
            className="cursor-pointer font-bold absolute self-center py-3 lg:mt-20 px-3 mt-1 right-0 lg:py-4 lg:px-8 lg:m-8 text-white bg-gray-800 rounded uppercase"
          >
            Login
          </button>
          <button
            onClick={register}
            className="cursor-pointer font-bold absolute self-center py-3 mr-20 px-3 mt-1 lg:mr-40 lg:mt-20 right-0 lg:py-4 lg:px-8 lg:m-8 text-white bg-gray-800 rounded uppercase"
          >
            Sign Up
          </button>
        </>
      )}
    </nav>
  );
};

export default AuthOptions;
