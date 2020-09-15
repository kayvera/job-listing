import React, { useState } from "react";
import { ModalContext } from "./modalContext";
import { Link } from "react-router-dom";

const PopUp = (props) => {
  let { handleModal } = React.useContext(ModalContext);

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // const handleSubmitClick = (e) => {
  //   e.preventDefault();
  //   if (state.password === state.confirmPassword) {
  //     sendDetailsToServer();
  //   } else {
  //     props.showError("Passwords do not match");
  //   }
  // };

  return (
    <div className="bg-teal-500">
      <button
        className="cursor-pointer font-bold absolute self-center mt-20 right-0 py-4 px-8 m-8 text-white bg-gray-800 rounded"
        onClick={() =>
          handleModal(
            <form className="m-6 overflow-hidden">
              <h1 className="font-bold text-center text-3xl">Sign Up</h1>
              <span>Sign up with your email and password</span>
              <div className="p-2">
                <div className="mt-2 mb-1 font-bold">
                  <label>Name</label> <br />
                  <input
                    className="border-gray-900 border border-solid px-24 rounded py-1 pl-1"
                    type="text"
                    placeholder="Name"
                    id="name"
                    value={state.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div div className="mt-3 font-bold">
                  <label>Email Address</label> <br />
                  <input
                    className="border-gray-900 border border-solid px-24 rounded py-1 pl-1"
                    type="text"
                    placeholder="Enter email"
                    id="email"
                    value={state.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mt-3 font-bold">
                  <label>Password</label> <br />
                  <input
                    className="border-gray-900 border border-solid px-24 rounded py-1 pl-1"
                    type="password"
                    placeholder="Enter password"
                    id="password"
                    value={state.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mt-3 font-bold">
                  <label>Confirm Password</label> <br />
                  <input
                    className="border-gray-900 border border-solid px-24 rounded py-1 pl-1"
                    type="password"
                    placeholder="Confirm password"
                    id="password2"
                    value={state.password2}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <button
                  className="bg-gray-800 text-white mt-4 py-2 object-center rounded"
                  type="submit"
                  // onClick={handleSubmitClick}
                >
                  Sign Up
                </button>
                <div className="text-sm">
                  <p className="mt-2">
                    Already registered{" "}
                    <Link className="text-teal-500" to="/signin">
                      sign in?
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          )
        }
      >
        SIGN UP
      </button>
    </div>
  );
};

export default PopUp;
