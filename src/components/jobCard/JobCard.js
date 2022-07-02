import React from 'react';
import './jobCard.css';

export const JobCard = (props) => {
  const { job } = props;

  return (
    <div className="div-job-card">
      <h2>{job.title}</h2>
      <p>{job.descriptionPreview}</p>
    </div>
  );
};
