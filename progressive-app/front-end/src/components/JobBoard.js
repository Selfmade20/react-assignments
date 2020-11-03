import React from "react";

function JobBoard({ job }) {
  const tags = [job.role, job.level];

  if (job.languages) {
    tags.push(...job.languages);
  }
  if (job.tools) {
    tags.push(...job.tools);
  }
  return (
    <div
      className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded sm:flex-row ${
        job.featured && "border-l-4 border-teal-500 border-solids"
      }`}
    >
      {/* <div><img src={job.logo} alt={job.company} /></div> */}
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-teal-500">
          {job.company}
          {job.new && (
            <span className="text-teal-500 bg-teal-100 font-bold p-1 m-2 rounded-full">
              New
            </span>
          )}
          {job.featured && (
            <span className="text-white bg-gray-800 font-bold py-1 px-2 rounded-full">
              Featured
            </span>
          )}
        </h3>
        <h2 className="font-bold text-xl my-2">{job.position}</h2>
        <p className="text-gray-600">
          {job.postedAt} · {job.contract} · {job.location}
        </p>
      </div>
      <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid sm:ml-auto sm:border-0">
        {tags
          ? tags.map((tag) => (
              <span className="text-teal-500 bg-teal-100 font-bold mr-4 mb-4 p-2 rounded">
                {tag}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
}

export default JobBoard;
