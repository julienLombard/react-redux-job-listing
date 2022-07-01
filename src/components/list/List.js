import React, { useState } from 'react';
import jobsList from '../../data/jobsList';
import { AddJobForm } from '../addJobForm/AddJobForm';
import './list.css';

export const List = () => {
  const [jobs, setJobs] = useState(jobsList);
  console.log(jobs);

  const list = jobs.map((e, i) => {
    return (
      <div key={i} className="div-job-card">
        <h2>{e.title}</h2>
        <p>{e.descriptionPreview}</p>
      </div>
    );
  });

  return (
    <div>
      {list}
      <AddJobForm data={[jobs, setJobs]} />
    </div>
  );
};
