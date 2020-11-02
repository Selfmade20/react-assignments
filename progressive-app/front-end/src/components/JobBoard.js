import React from "react";

function JobBoard({ job }) {
  const langAndTools = [];

  if (job.languages) {
    langAndTools.push(...job.languages);
  }
  if (job.tools) {
    langAndTools.push(...job.tools);
  }
  return (
    <div className="flex bg-white shadow-md my-4 p-6 ml-4">
      <div>{/* <img src={job.logo} alt={job.company} /> */}</div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-teal-500">{job.company}</h3>
        <h2 className="font-bold text-xl">{job.position}</h2>
        <p className="text-gray-600">
          {job.postedAt} · {job.contract} · {job.location}
        </p>
      </div>
      <div className="flex items-center ml-auto">
        {langAndTools
          ? langAndTools.map((langAndTool) => (
              <span className="text-teal-500 bg-teal-100 font-bold m-2 p-2 rounded">
                {langAndTool}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
}

export default JobBoard;
