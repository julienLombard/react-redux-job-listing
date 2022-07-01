import React from 'react';
import jobsList from '../../data/jobsList';
import './list.css';

export const List = () => {
  const list = jobsList.map((e) => {
    return (
      <div className="div-job-card">
        <h2>{e.title}</h2>
        <p>{e.descriptionPreview}</p>
      </div>
    );
  });

  return <div>{list}</div>;
};
