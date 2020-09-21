import React from "react";
import Logo from "../assets/job_logo1.png";
import AuthOptions from "../auth/AuthOptions";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <header className="flex bg-teal-500 mb-12">
      <img
        src={Logo}
        alt="logo"
        className="cursor-pointer absolute mt-20 ml-10"
        onClick={() => {
          history.push("/");
        }}
      />
      <img className="w-full" src="/images/bg-header-desktop.svg" alt="bg" />
      <AuthOptions />
    </header>
  );
};

export default Header;
