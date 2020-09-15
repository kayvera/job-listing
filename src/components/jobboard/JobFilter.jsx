import React, { useState, useEffect } from "react";
import data from "../../assets/data.json";
import JobBoard from "./JobBoard";
import { ModalProvider } from "../signupmodal/modalContext";
import PopUp from "../signupmodal/PopUp";

const JobFilter = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);
  useEffect(() => setJobs(data), []);

  const filterFunc = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }

    if (languages) {
      tags.push(...languages);
    }

    return filters.every((filter) => tags.includes(filter));
  };

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const filteredJobs = jobs.filter(filterFunc);
  return (
    <>
      <header className="flex bg-teal-500 mb-12">
        <img className="w-full" src="/images/bg-header-desktop.svg" alt="bg" />
        <ModalProvider>
          <PopUp />
        </ModalProvider>
      </header>
      <div className="container m-auto">
        {filters.length > 0 && (
          <div
            className={`flex bg-white shadow-md -my-20 mb-16 mx-10 p-6 rounded z-10 relative`}
          >
            {filters.map((filter) => (
              <span
                className="cursor-pointer mr-4 mb-4 rounded font-bold text-teal-500 bg-teal-100 p-2 lg:mb-0"
                onClick={() => handleFilterClick(filter)}
              >
                × {filter}
              </span>
            ))}
            <button
              onClick={clearFilters}
              className="font-bold text-grey-700 ml-auto"
            >
              Clear
            </button>
          </div>
        )}
        {jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ) : (
          filteredJobs.map((job) => (
            <JobBoard job={job} key={job.id} handleTagClick={handleTagClick} />
          ))
        )}
      </div>
    </>
  );
};

export default JobFilter;
