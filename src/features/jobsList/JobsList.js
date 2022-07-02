import React from 'react';
import { useSelector } from 'react-redux';
import { getjobsList } from './jobsListSlice';
import { JobCard } from '../../components/jobCard/JobCard';

const JobsList = () => {
  const jobsList = useSelector(getjobsList);

  let renderJobsList =
    jobsList !== undefined
      ? jobsList.map((job, index) => <JobCard job={job} key={index} />)
      : null;

  return <div>{renderJobsList}</div>;
};

export default JobsList;
