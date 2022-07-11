import React from 'react';
import { useMemo } from 'react';

export const JobCard = ({ job }) => {
  const skillsList = useMemo(
    () => job.skillsList.map((e, i) => <li key={i}>{e.name}</li>),
    [job]
  );

  return (
    <div className="div-job-card">
      <div className="div-img">
        <figure>
          <img
            src={
              job.smallCompany.logoImageLink
                ? job.smallCompany.logoImageLink
                : null
            }
            alt={
              'Logo entreprise ' + job.smallCompany ? job.smallCompany : null
            }
          />
        </figure>
      </div>
      <div className="div-info">
        {job.smallCompany.companyName && (
          <h2>{job.smallCompany.companyName}</h2>
        )}

        {job.title && <h3>{job.title}</h3>}
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
        {skillsList && (
          <ul>
            {skillsList[0]} | {skillsList[1]} | {skillsList[2]}
          </ul>
        )}
      </div>
    </div>
  );
};
