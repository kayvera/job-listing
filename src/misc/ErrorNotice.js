import React from "react";

const ErrorNotice = (props) => {
  return (
    <div className="flex items-center justify-center min-w-full mx-64">
      <span className="mt-4 px-2 py-2 border border-solid border-red-400 bg-red-300 border-r-0">
        {props.message}
      </span>
      <button
        className="px-2 py-2 mt-4 border border-solid border-red-400 bg-red-300 border-l-0 font-bold"
        onClick={props.clearError}
      >
        X
      </button>
    </div>
  );
};

export default ErrorNotice;
