import React from "react";
import { ModalContext } from "./modalContext";

const PopUp = () => {
  let { handleModal } = React.useContext(ModalContext);

  return (
    <div className="bg-teal-500">
      <button
        className="cursor-pointer font-bold absolute self-center mt-20 right-0 py-4 px-8 m-8 text-white bg-gray-800 rounded"
        onClick={() =>
          handleModal(
            <form className="m-6 overflow-hidden">
              <h1 className="font-bold text-center text-3xl">Sign Up</h1>
              <div className="p-2">
                <div className="mt-2 mb-1 font-bold">
                  <label>Name</label> <br />
                  <input
                    className="border-gray-900 border border-solid px-24 rounded py-1 pl-1"
                    type="text"
                    placeholder="Name"
                  />
                </div>

                <div div className="mt-3 font-bold">
                  <label>Email Address</label> <br />
                  <input
                    className="border-gray-900 border border-solid px-24 rounded py-1 pl-1"
                    type="text"
                    placeholder="Enter email"
                  />
                </div>

                <div className="mt-3 font-bold">
                  <label>Password</label> <br />
                  <input
                    className="border-gray-900 border border-solid px-24 rounded py-1 pl-1"
                    type="password"
                    placeholder="Enter password"
                  />
                </div>
                <div className="mt-3 font-bold">
                  <label>Confirm Password</label> <br />
                  <input
                    className="border-gray-900 border border-solid px-24 rounded py-1 pl-1"
                    type="password"
                    placeholder="Confirm password"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <button
                  className="bg-gray-800 text-white mt-4 py-2 object-center rounded"
                  type="submit"
                >
                  Sign Up
                </button>
                <div className="text-sm">
                  <p className="mt-2">
                    Already registered{" "}
                    <a className="text-teal-500" href="*">
                      sign in?
                    </a>
                  </p>
                </div>
              </div>
            </form>
          )
        }
      >
        SIGN IN
      </button>
    </div>
  );
};

export default PopUp;
