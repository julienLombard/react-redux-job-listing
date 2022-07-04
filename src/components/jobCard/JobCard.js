import React from 'react';
import './jobCard.css';

export const JobCard = (props) => {
  const { job } = props;

  const skillsList = job.skillsList.map((e, i) => (
    <li key={i} className="li-job-card">
      {e.name}
    </li>
  ));

  return (
    <div className="div-job-card">
      <div className="div-img-job-card">
        <figure className="figure-job-card">
          <img
            src={job.smallCompany.logoImageLink}
            alt={'Logo entreprise ' + job.smallCompany.companyName}
            className="img-job-card"
          />
        </figure>
      </div>
      <div className="info-div-job-card">
        <h2>{job.smallCompany.companyName}</h2>
        <h3>{job.title}</h3>
        {job.details.city && (
          <p className="p-city-job-card">{job.details.city}</p>
        )}
        {job.details.acceptRemote && (
          <p className="p-remote-job-card">
            télétravail {job.details.acceptRemote}
          </p>
        )}
        {job.details.requiredExperience && (
          <p className="p-experience-job-card">
            experience{' '}
            {job.details.requiredExperience > 1
              ? job.details.requiredExperience + ' ans'
              : job.details.requiredExperience + ' an'}
          </p>
        )}
        {job.details.salary && (
          <p className="p-salary-job-card">salaire {job.details.salary}</p>
        )}
        <ul className="ul-job-card">
          {skillsList[0]} | {skillsList[1]} | {skillsList[2]}
        </ul>
      </div>
    </div>
  );
};
