import React from 'react';

export const JobCard = (props) => {
  const { job } = props;

  const skillsList = job ? (
    job.skillsList.map((e, i) => <li key={i}>{e.name}</li>)
  ) : (
    <p>Error loading jobs list</p>
  );

  return (
    <div className="div-job-card">
      <div className="div-img">
        <figure>
          <img
            src={job.smallCompany.logoImageLink}
            alt={'Logo entreprise ' + job.smallCompany.companyName}
          />
        </figure>
      </div>
      <div className="div-info">
        <h2>{job.smallCompany.companyName}</h2>

        <h3>{job.title}</h3>
        {job.details.city && <p>{job.details.city}</p>}
        {job.details.acceptRemote && (
          <p>télétravail {job.details.acceptRemote}</p>
        )}
        {job.details.requiredExperience && (
          <p>
            experience
            {job.details.requiredExperience > 1
              ? ' ' + job.details.requiredExperience + ' ans'
              : ' ' + job.details.requiredExperience + ' an'}
          </p>
        )}
        {job.details.salary && <p>salaire {job.details.salary}</p>}
        <ul>
          {skillsList[0]} | {skillsList[1]} | {skillsList[2]}
        </ul>
      </div>
    </div>
  );
};
