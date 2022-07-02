import React, { useEffect, useState } from 'react';
import { jobsList } from '../../data/firebase.config.js';
import { JobForm } from '../JobForm/JobForm';
import './list.css';

export const List = () => {
  const [jobs, setJobs] = useState([]);
  console.log(jobs);

  const fetchList = () => {
    jobsList.then((result) => setJobs(...jobs, result));
  };

  useEffect(() => {
    fetchList();
  }, []);

  const list = jobs?.map((e, i) => {
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
      <JobForm data={[jobs, setJobs]} />
    </div>
  );
};
