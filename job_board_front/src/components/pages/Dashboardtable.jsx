import React, { useState } from "react";

const sampleJobData = [
  // ... (Your sample job data)
  {
        companyName: "Company 1",
        jobDescription: "Job 1 Description",
        fullDescription: "Full Description for Job 1",
        wages: "$50,000",
        place: "City 1",
        workingTime: "Full-time",
      },
      {
        companyName: "Company 2",
        jobDescription: "Job 2 Description",
        fullDescription: "Full Description for Job 2",
        wages: "$60,000",
        place: "City 2",
        workingTime: "Part-time",
      },{
        companyName: "Company 1",
        jobDescription: "Job 1 Description",
        fullDescription: "Full Description for Job 1",
        wages: "$50,000",
        place: "City 1",
        workingTime: "Full-time",
      },
      {
        companyName: "Company 2",
        jobDescription: "Job 2 Description",
        fullDescription: "Full Description for Job 2",
        wages: "$60,000",
        place: "City 2",
        workingTime: "Part-time",
      },
];

function DashboardTable() {
  const jobsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [editableRows, setEditableRows] = useState({});
  const [currentJobs, setCurrentJobs] = useState(sampleJobData);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const displayedJobs = currentJobs.slice(indexOfFirstJob, indexOfLastJob);

  const toggleEdit = (index) => {
    setEditableRows({
      ...editableRows,
      [index]: !editableRows[index],
    });
  };

  const handleEdit = (e, index, field) => {
    const updatedJobs = [...currentJobs];
    updatedJobs[index][field] = e.target.value;
    setCurrentJobs(updatedJobs);
  };

  const saveChanges = (index) => {
    toggleEdit(index);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h3 className="text-lg font-semibold mt-4">Dashboard</h3>
      <div className="border border-solid border-gray-200 overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-3 border border-gray-200">Company Name</th>
              <th className="py-2 px-3 border border-gray-200">Job Description</th>
              <th className="py-2 px-3 border border-gray-200">Full Description</th>
              <th className="py-2 px-3 border border-gray-200">Wages</th>
              <th className="py-2 px-3 border border-gray-200">Place</th>
              <th className="py-2 px-3 border border-gray-200">Working Time</th>
              <th className="py-2 px-3 border border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedJobs.map((job, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="py-2 px-3 border border-gray-200">
                  {editableRows[index] ? (
                    <input
                      type="text"
                      value={job.companyName}
                      onChange={(e) => handleEdit(e, index, "companyName")}
                    />
                  ) : (
                    job.companyName
                  )}
                </td>
                <td className="py-2 px-3 border border-gray-200">
                  {editableRows[index] ? (
                    <input
                      type="text"
                      value={job.jobDescription}
                      onChange={(e) => handleEdit(e, index, "jobDescription")}
                    />
                  ) : (
                    job.jobDescription
                  )}
                </td>
                <td className="py-2 px-3 border border-gray-200">
                  {editableRows[index] ? (
                    <input
                      type="text"
                      value={job.fullDescription}
                      onChange={(e) => handleEdit(e, index, "fullDescription")}
                    />
                  ) : (
                    job.fullDescription
                  )}
                </td>
                <td className="py-2 px-3 border border-gray-200">
                  {editableRows[index] ? (
                    <input
                      type="text"
                      value={job.wages}
                      onChange={(e) => handleEdit(e, index, "wages")}
                    />
                  ) : (
                    job.wages
                  )}
                </td>
                <td className="py-2 px-3 border border-gray-200">
                  {editableRows[index] ? (
                    <input
                      type="text"
                      value={job.place}
                      onChange={(e) => handleEdit(e, index, "place")}
                    />
                  ) : (
                    job.place
                  )}
                </td>
                <td className="py-2 px-3 border border-gray-200">
                  {editableRows[index] ? (
                    <input
                      type="text"
                      value={job.workingTime}
                      onChange={(e) => handleEdit(e, index, "workingTime")}
                    />
                  ) : (
                    job.workingTime
                  )}
                </td>
                <td className="py-2 px-3 border border-gray-200">
                  {editableRows[index] ? (
                    <button
                      onClick={() => saveChanges(index)}
                      className="bg-blue-500 text-white px-2 py-1"
                    >
                      Save
                    </button>
                  ) : (
                    <button onClick={() => toggleEdit(index)} className="bg-yellow-500 text-white px-2 py-1">
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        {Array.from({ length: Math.ceil(sampleJobData.length / jobsPerPage) }).map((_, index) => (
          <button
            key={index}
            className={`${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500"
            } px-4 py-2 ml-2`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DashboardTable;
