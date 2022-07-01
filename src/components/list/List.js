import React, { useEffect, useState } from 'react';
import { jobsList } from '../../data/firebase.config.js';
import { AddJobForm } from '../addJobForm/AddJobForm';
import './list.css';

export const List = () => {
  const [jobs, setJobs] = useState([]);

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
      <AddJobForm data={[jobs, setJobs]} />
    </div>
  );
};
