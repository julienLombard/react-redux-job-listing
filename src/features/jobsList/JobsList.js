import React from 'react';
import { useSelector } from 'react-redux';
import { getjobsList } from './jobsListSlice';
import '../../components/list/list.css';

const JobsList = () => {
  const jobsList = useSelector(getjobsList);

  let renderJobsList =
    jobsList !== undefined
      ? jobsList.map((job, index) => {
          return (
            <div key={index} className="div-job-card">
              <h2>{job.title}</h2>
              <p>{job.descriptionPreview}</p>
            </div>
          );
        })
      : null;

  return <div>{renderJobsList}</div>;
};

export default JobsList;
