import React, { useState } from "react";
import AddJobForm from "./Addjobform";
import DashboardTable from "./Dashboardtable";

function AdminDashboard() {
  const [view, setView] = useState("dashboard");

  return (
    <div className="h-screen flex flex-col">
      <div className="text-2xl font-bold p-4">Welcome, Admin</div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 mr-2"
          onClick={() => setView("addJob")}
        >
          Add a Job
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2"
          onClick={() => setView("dashboard")}
        >
          Dashboard
        </button>
      </div>
      {view === "addJob" && <AddJobForm />}
      {view === "dashboard" && <DashboardTable />}
    </div>
  );
}

export default AdminDashboard;
