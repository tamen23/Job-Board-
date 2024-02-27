import React, { useState } from "react";

function AddJobForm() {
  const [jobData, setJobData] = useState({
    companyName: "",
    jobDescription: "",
    fullDescription: "",
    wages: "",
    place: "",
    workingTime: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
  };

  return (
    <div className="overflow-y-auto p-4">
      <h3 className="text-lg font-semibold mt-4">Add a Job</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Company Name</label>
          <input
            type="text"
            name="companyName"
            value={jobData.companyName}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label>Job Description</label>
          <input
            type="text"
            name="jobDescription"
            value={jobData.jobDescription}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label>Full Description</label>
          <input
            type="text"
            name="fullDescription"
            value={jobData.fullDescription}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label>Wages</label>
          <input
            type="text"
            name="wages"
            value={jobData.wages}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label>Place</label>
          <input
            type="text"
            name="place"
            value={jobData.place}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label>Working Time</label>
          <input
            type="text"
            name="workingTime"
            value={jobData.workingTime}
            onChange={handleInputChange}
          />
        </div>

        <button className="bg-blue-500 text-white px-4 py-2" type="submit">
          Add the Job
        </button>
      </form>
    </div>
  );
}

export default AddJobForm;
