import "./App.css";
import React, { useState, useEffect } from "react";
import JobBoard from "./components/JobBoard";
import NavigationBar from "./components/NavigationBar";
import data from "./assets/data.json";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => setJobs(data), []);

  console.log(jobs);

  return (
    <div className="app">
      <NavigationBar />
      <h1 className="text-4xl text-center font-sans uppercase text-gray-700">Active Jobs</h1>
      {jobs.length === 0 ? (
        <p>Fetching jobs...</p>
      ) : (
        jobs.map((job) => <JobBoard job={job} key={job.id} />)
      )}
    </div>
  );
}

export default App;
