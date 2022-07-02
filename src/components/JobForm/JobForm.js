import { addDoc } from 'firebase/firestore';
import React from 'react';
import { jobsCol } from '../../data/firebase.config';
import { PropTypes } from 'prop-types';
import './jobForm.css';

export const JobForm = (props) => {
  const [jobs, setjobs] = props.data;

  const handleForm = (e) => {
    e.preventDefault();

    const newJob = {
      smallCompagny: {
        compagnyName: e.target[0].value,
      },
      title: e.target[1].value,
      publishDate: Date.now(),
      description: e.target[2].value,
      descriptionPreview: e.target[2].value.substring(0, 400),
    };
    setjobs([...jobs, newJob]);

    addDoc(jobsCol, newJob);
  };

  return (
    <div className="div-form">
      <h2>form</h2>
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="entreprise">Entreprise </label>
          <input type="text" name="entreprise" />
        </div>
        <div>
          <label htmlFor="titre">Titre </label>
          <input type="text" name="titre" />
        </div>
        <div>
          <label name="description">Description</label>
          <textarea name="description" rows="5" cols="33" />
        </div>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

JobForm.prototype = {
  handleForm: PropTypes.func.isRequired,
  smallCompagny: {
    compagnyName: PropTypes.string.isRequired,
  },
  title: PropTypes.string.isRequired,
  publishDate: Date.now(),
  description: PropTypes.string.isRequired,
  descriptionPreview: PropTypes.string.isRequired,
};
